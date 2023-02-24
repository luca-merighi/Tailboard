import ListItem from './ListItem'
import useAuth from '@/data/hook/useAuth'

import Image from 'next/image'

import Tailboard from '../icons/tailwindcss.svg'
import HomeIcon from '../icons/home.svg'
import SettingsIcon from '../icons/settings.svg'
import UsersIcon from '../icons/users.svg'
import LogoutIcon from '../icons/logout.svg'

export default function Sidebar() {
    const {logout} = useAuth()

    return (
        <div className="flex flex-row md:flex-col dark:bg-stone-700">
            <ul className="w-32 flex md:flex-col flex-row flex-grow">
                <header className="
                    flex gap-2 items-center justify-center px-4 md:py-4
                    border-r md:border-b border-stone-800/50">
                    <Image 
                        src={Tailboard} alt="Tailboard" 
                        width={30} height={30} />
                        <h3 className="
                            text-lg text-tailwind">
                            Tailboard
                        </h3>
                </header>
                <ListItem
                    url="/"
                    icon={HomeIcon}
                    text="Home" />
                <ListItem
                    url="/Users"
                    icon={UsersIcon}
                    text="Usuários" />
                <ListItem
                    url="/Settings"
                    icon={SettingsIcon}
                    text="Configurações" />

            </ul>
            <ul className="hidden md:block">
                <ListItem
                    url="/Users"
                    icon={LogoutIcon}
                    text="Logout"
                    class="text-red-500 dark:hover:text-red-500"
                    onClick={logout} />
            </ul>
        </div>
    )
}