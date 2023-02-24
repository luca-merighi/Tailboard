import Image from 'next/image'

import MoonIcon from '../icons/moon.svg'
import SunIcon from '../icons/sun.svg'

interface ChangeThemeButton {
    theme: string,
    changeTheme: () => void
}

export default function ChangeThemeButton(props: ChangeThemeButton) {
    return props.theme == 'dark' ? (
        <button 
            onClick={props.changeTheme}
            className="
                flex gap-2 items-center
                bg-stone-100 p-2 px-4 
                text-zinc-700 font-medium
                rounded-3xl">
                <Image src={SunIcon} alt="Light mode" width={15} height={15} />
                Light
        </button>
    ) : (
        <button 
            onClick={props.changeTheme}
            className="
                hidden sm:flex gap-2 items-center
                bg-stone-800 p-2 px-4
                text-zinc-200 font-medium
                rounded-3xl">
                <Image src={MoonIcon} alt="Dark mode" width={15} height={15} />
                Dark
        </button>
    )
}