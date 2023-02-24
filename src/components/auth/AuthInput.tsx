interface AuthInputProps {
    label: string,
    type?: 'text' | 'email' | 'password',
    placeholder: string,
    value: any,
    mandatory: boolean,
    changeValue: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="
                text-lg text-stone-700 font-medium">
                {props.label}
            </label>
            <input 
                type={props.type ?? 'text'}
                placeholder={props.placeholder}
                value={props.value}
                required={props.mandatory}
                onChange={e => props.changeValue?.(e.target.value)}
                className="
                    p-2
                    bg-stone-200
                    text-stone-700
                    border-2 border-stone-200
                    rounded-md
                    focus:outline-none
                    focus:border-sky-500
                    focus:bg-stone-300/75" />
        </div>
    )
}