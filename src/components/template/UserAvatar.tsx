import useAuth from '@/data/hook/useAuth'
import Image from 'next/image'

import Link from 'next/link'

import UserIcon from '../icons/user.svg'

export default function UserAvatar() {
    const {user} = useAuth()
    
    return (
        <Link 
        href="/Settings" 
        className="rounded-full hidden md:block">
            <Image 
                src={user?.imageUrl ?? UserIcon} 
                alt="Foto de perfil do Usuário"
                width={50} height={50}
                className={`
                ${user?.imageUrl ? '' : 'p-2'}
                bg-stone-100 dark:bg-stone-700 rounded-full`} />
        </Link>
    )
}