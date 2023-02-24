import UserAvatar from './UserAvatar'

interface HeadertProps {
    title: string,
    subtitle: string,
    children?: any
}

export default function Header(props: HeadertProps) {
    return (
        <header className="
            flex items-center justify-between">
            <nav className="flex flex-col gap-2">
                <h1 className="
                    text-zinc-800 text-3xl font-bold dark:text-zinc-100">
                    {props.title}
                </h1>
                <h3 className="
                    text-zinc-700 text-xl font-medium dark:text-zinc-200">
                    {props.subtitle}
                </h3>
            </nav>

            <UserAvatar />
        </header>
    )
}