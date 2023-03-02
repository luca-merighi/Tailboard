import { useState } from 'react'
import Client from '@/model/Client'

import ClientInput from './ClientInput'

interface CreateClientFormProps {
    client?: Client,
    visible?: boolean,
    setVisible: any,
    changedClient?: (client: Client) => void,
    handleCancelForm?: () => void
}

export default function CreateClientForm(props: CreateClientFormProps) {
    const id = props.client?.id ?? null
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    const [role, setRole] = useState(props.client?.role ?? '')

    return (
        <div className="
        absolute z-50 top-0 left-0 h-screen w-screen 
        bg-stone-900/50 dark:bg-stone-900/75 
        flex items-center justify-center">
            <div className="
            flex flex-col gap-10 w-fit p-10  
            bg-stone-300 dark:bg-stone-700 
            rounded-md">
                <div className="
                flex flex-col lg:flex-row gap-4 items-start ">
                    <ClientInput
                        inputType="text"
                        placeholder="Nome"
                        value={name}
                        changeValue={setName} />
                    <ClientInput
                        inputType="number"
                        placeholder="Idade"
                        value={age}
                        changeValue={setAge} />
                    <ClientInput
                        inputType="text"
                        placeholder="Cargo"
                        value={role}
                        changeValue={setRole} />
                </div>

                <div className="flex flex-wrap gap-4">
                    <button 
                    onClick={() => props.changedClient?.(new Client(name, age, role, id))}
                    className="
                        bg-emerald-500 p-4
                        text-md text-zinc-100 
                        rounded-md
                        transition-colors
                        hover:bg-emerald-600">
                            {id ? 'Alterar' : 'Salvar'}
                    </button>

                    <button 
                    onClick={props.handleCancelForm}
                    className="
                        bg-gray-400 p-4
                        text-md text-zinc-100 
                        rounded-md
                        transition-colors
                        hover:bg-gray-500">
                        Cancelar Cadastro
                    </button>
                </div>
            </div>
        </div>
    )
}