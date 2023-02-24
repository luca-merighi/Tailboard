import { createContext, useEffect, useState } from 'react'

interface AppContextProps {
    theme?: string,
    changeTheme?: () => void
}

interface AppProviderProps {
    children?: any
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: AppProviderProps) {
    const [theme, setTheme] = useState('')

    function changeTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        setTheme(savedTheme)
    }, [])
    
    return (
        <AppContext.Provider value={{
            theme,
            changeTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext