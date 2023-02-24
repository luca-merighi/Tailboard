import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import useAppData from '@/data/hook/useAppData'
import useAuth from '@/data/hook/useAuth'

import Layout from '../components/template/Layout'
import ChangeThemeButton from '@/components/template/ChangeThemeButton'

import UserIcon from '../components/icons/user.svg'
import ArrowIcon from '../components/icons/arrow-down.svg'

export default function Settings() {
    const [showProfileCard, setShowProfileCard] = useState('hidden')
    const {theme, changeTheme} = useAppData()
    const {user} = useAuth()

    function showProfile() {
        showProfileCard == 'hidden' 
        ? setShowProfileCard('flex')
        : setShowProfileCard('hidden')
    }

    return (
        <React.Fragment>
            <Head>
                <link rel="shortcut icon" href="/tailwindcss.png" type="image/x-icon" />
                <title>Tailboard - Configurações</title>
            </Head>

            <Layout title="Configurações" subtitle="Aqui você pode gerenciar as configurações">
                <ul className="flex flex-col gap-4">
                    <li className="
                        flex gap-2 items-center
                        text-zinc-700 font-semibold dark:text-zinc-200">
                        Alterar Tema:
                        <ChangeThemeButton 
                            theme={theme}
                            changeTheme={changeTheme} />
                    </li>
                    <li className="
                        flex flex-col gap-4
                        text-zinc-700 font-semibold dark:text-zinc-200
                        cursor-pointer"
                        onClick={showProfile}>
                        <p className="flex gap-2 items-center">
                            Perfil 
                            <Image 
                            src={ArrowIcon} 
                            alt="Arrow down"
                            width={20} height={20}
                            className={showProfileCard == 'flex' ? 'rotate-180' : ''} />
                        </p> 
                        <div className={`
                            ${showProfileCard} flex-col gap-2
                            bg-stone-300 dark:bg-stone-700 w-fit p-8 rounded-md
                        `}>
                        <Image 
                            src={user?.imageUrl ?? UserIcon} 
                            alt="Foto de perfil do Usuário"
                            width={150} height={150}
                            className={`
                            ${user?.imageUrl ? '' : 'p-2'}
                            bg-stone-100 dark:bg-stone-700 rounded-full`} />
                        
                        <h3 className="text-zinc-800 dark:text-zinc-200 text-2xl font-bold text-center">
                            {user?.name ?? 'Usuário'}
                        </h3>
                        </div>
                    </li>
                </ul>
            </Layout>
        </React.Fragment>
    )
}