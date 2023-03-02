interface ClientInputProps {
    inputType: 'text' | 'number',
    placeholder: string,
    value: any,
    changeValue: (newValue: any) => void
}

export default function ClientInput(props: ClientInputProps) {
    return (
        <input 
        type={props.inputType ?? 'text'}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.changeValue?.(e.target.value)}
        className={`
        ${props.inputType === 'number' ? 'w-20' : 'w-60'}
        bg-stone-100 dark:bg-stone-800 py-4 px-2
        text-zinc-700 dark:text-zinc-300
        border-2 border-stone-100 dark:border-stone-500
        rounded-md
        focus:outline-none
        focus:border-stone-700 dark:focus:border-stone-400
        focus:bg-stone-200 dark:focus:bg-stone-800/75`} />
    )
}