import Image from 'next/image'
import Link from 'next/link'

interface ListItemProps {
    url: string,
    icon: any,
    text: string,
    class?: string,
    onClick?: (event: any) => void
}

export default function ListItem(props: ListItemProps) {
    return (
        <li 
            onClick={props.onClick}
            className="
            hover:bg-stone-100 dark:hover:bg-stone-600">
            <Link 
                href={props.url}
                className={`
                text-stone-600 ${props.class} dark:text-stone-200
                flex flex-col gap-2 items-center justify-center px-4 md:px-2 py-4
                `}>
                <Image 
                src={props.icon} alt={props.text} 
                width={25} height={25} />
                <p className="
                    hidden md:block
                    text-md font-light ">
                    {props.text}
                </p>
            </Link>
        </li>
    )
}