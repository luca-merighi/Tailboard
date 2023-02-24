import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import route from 'next/router'
import Cookies from 'js-cookie'
// npm i --save-dev @types/js-cookie
import User from '../../model/User'

interface AuthContextProps {
    user?: User,
    loading?: boolean,
    loginGoogle?: () => Promise<void>,
    login?: (email: string, password: string) => Promise<void>,
    register?: (email: string, password: string) => Promise<void>,
    logout?: () => Promise<void>
}

interface AuthProviderProps {
    children?: any
}


const AuthContext = createContext<AuthContextProps>({})

async function normalUser(firebaseUser: firebase.User): Promise<User> {
    const token = await firebaseUser.getIdToken()
    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        token,
        provider: firebaseUser.providerData[0].providerId,
        imageUrl: firebaseUser.photoURL
    }
}

function manageCookie(loggedIn: boolean) {
    if(loggedIn) {
        Cookies.set('tailboard-auth', loggedIn, {
            expires: 7
        })
    } else {
        Cookies.remove('tailboard-auth')
    }
}

export function AuthProvider(props: AuthProviderProps) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(null)

    async function configSession(firebaseUser) {
        if(firebaseUser?.email) {
            const user = await normalUser(firebaseUser)
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            ) 
    
            await configSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function login(email, password) {
        try {
            setLoading(true)
            const resp = await firebase
                 .auth().signInWithEmailAndPassword(email, password)
            await configSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function register(email, password) {
        try {
            setLoading(true)
            const resp = await firebase
                 .auth().createUserWithEmailAndPassword(email, password)
            await configSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await configSession(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('tailboard-auth')) {
            const cancell = firebase.auth().onIdTokenChanged(configSession)
            return () => cancell()
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            loginGoogle,
            login,
            register,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext