import React, { useState } from 'react'
import Head from 'next/head'
import useAuth from '@/data/hook/useAuth'

import Image from 'next/image'

import AuthInput from '@/components/auth/AuthInput'

import LoginIcon from '../components/icons/login.svg'
import GoogleIcon from '../components/icons/google.svg'

export default function Authentication() {
    const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authError, setAuthError] = useState(null)

    const {loginGoogle, login, register} = useAuth()

    function showErrorMessage(msg: any, time = 5) {
        setAuthError(msg)
        setTimeout(() => setAuthError(null), time * 1000)
    }

    async function submit() {
        try {
            if(authMode === 'login') {
                await login(email, password)
            } else {
                await register(email, password)
            }
        } catch(e) {
            showErrorMessage('Ocorreu um erro!')
        }
    }

    return (
        <React.Fragment>
            <Head>
                <link rel="shortcut icon" href="/tailwindcss.png" type="image/x-icon" />
                <title>Tailboard - Login</title>
            </Head>
            <main className="
                flex h-screen w-screen">
                <figure className="
                    hidden md:block
                    md:w-1/2 lg:w-2/3 bg-slate-300">
                    <img 
                    src="https://source.unsplash.com/random" 
                    alt="Imagem aleatória - Unsplash"
                    className="h-screen w-full object-cover" />
                </figure>
                <section className="
                    w-full md:w-1/2 lg:w-1/3 p-10
                    flex flex-col gap-6">
                    <h1 className="
                        text-zinc-800 text-3xl font-bold">
                        {authMode === 'login' 
                        ? 'Entre com sua conta' 
                        : 'Cadastre-se na plataforma'}
                    </h1>

                    {authError ? (
                    <div
                    className="
                    w-fit bg-red-100 p-2
                    rounded-md">
                        <p className="text-red-400 font-semibold">
                            {authError}
                        </p>
                    </div>
                    ) : false}

                    <AuthInput
                        label="Email"
                        type="email"
                        placeholder="Digite seu Email"
                        value={email}
                        mandatory
                        changeValue={setEmail} />
                    <AuthInput
                        label="Senha"
                        placeholder="Digite sua Senha"
                        type="password"
                        value={password}
                        mandatory
                        changeValue={setPassword} />

                    <button 
                        onClick={submit}
                        className="
                            w-full bg-sky-500 px-4 py-3
                            flex gap-2 items-center justify-center
                            text-stone-50 text-xl font-medium 
                            rounded-md
                            transition-colors
                            hover:bg-sky-600
                            focus:outline-stone-800
                            focus:bg-sky-600">
                        <Image 
                        src={LoginIcon} alt="Login" 
                        width={25} height={25} />
                        {authMode === 'login' 
                        ? 'Entrar' 
                        : 'Cadastrar'}
                    </button>

                    <div className="flex gap-2 items-center justify-center">
                        <div className="h-1 w-full bg-stone-700/25" />
                        <span className="text-stone-700 font-medium">
                            ou
                        </span>
                        <div className="h-1 w-full bg-stone-700/25" />
                    </div>

                    <button 
                        onClick={loginGoogle}
                        className="
                            w-full bg-red-500 px-4 py-3
                            flex gap-2 items-center justify-center
                            text-stone-200 text-xl font-medium 
                            rounded-md
                            transition-colors
                            hover:bg-red-600
                            focus:outline-stone-800
                            focus:bg-red-600">
                        <Image 
                        src={GoogleIcon} alt="Google Login" 
                        width={25} height={25} />
                        Entrar com Google
                    </button>

                    {authMode === 'login' ? (
                        <p className="text-stone-700">
                            Novo por aqui? &nbsp;
                            <a 
                            onClick={() => setAuthMode('register')}
                            className="
                                text-sky-500 
                                cursor-pointer
                                hover:text-sky-600">
                                Crie uma conta gratuitamente!
                            </a>
                        </p>
                    ) : (
                        <p className="text-stone-700">
                            Já possuí uma conta? &nbsp;
                            <a 
                            onClick={() => setAuthMode('login')}
                            className="
                                text-sky-500 
                                cursor-pointer
                                hover:text-sky-600">
                                Faça login!
                            </a>
                        </p>
                    )}
                </section>
            </main>
        </React.Fragment>
    )
}