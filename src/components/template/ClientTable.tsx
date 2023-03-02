import Image from 'next/image'
import Client from '@/model/Client'

import EditIcon from '../icons/edit.svg'
import TrashIcon from '../icons/trash.svg'

interface ClientTableProps {
    clients: Client[],
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}

export default function ClientTable(props: ClientTableProps) {
    const showActions = props.deletedClient || props.selectedClient

    function renderTHead() {
        return (
            <tr>
                <th className="text-left p-4">Nome</th>
                <th className="text-center p-4">Idade</th>
                <th className="text-center p-4">Cargo</th>
                {showActions ? <th className="text-center p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderActions(client) {
        return (
            <td className="flex flex-col md:flex-row gap-2 items-center justify-center p-4">
                {props.selectedClient ? (
                    <button 
                    onClick={() => props.selectedClient?.(client)}
                    className="
                    p-2
                    flex items-center justify-center
                    rounded-md
                    transition-colors
                    hover:bg-stone-200/75
                    dark:hover:bg-stone-800/75">
                    <Image 
                    src={EditIcon} 
                    alt="Editar Cliente"
                    width={25} height={25} />
                </button>
                ) : false}
                {props.deletedClient ? (
                    <button 
                    onClick={() => props.deletedClient?.(client)}
                    className="
                        p-2
                        flex items-center justify-center
                        rounded-md
                        transition-colors
                        hover:bg-stone-200/75
                        dark:hover:bg-stone-800/75">
                        <Image 
                        src={TrashIcon} 
                        alt="Deletar Cliente"
                        width={25} height={25} />
                    </button>
                ) : false}
            </td>
        )
    }

    function renderTableData() {
        return props.clients?.map(client => {
            return (
                <tr key={client.id} className="even:bg-stone-400/25 dark:even:bg-stone-500/25">
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-center p-4">{client.age}</td>
                    <td className="text-center p-4">{client.role}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }
    
    return (
        <table className="
        bg-stone-300 dark:bg-stone-700 
        rounded-md">
            <thead className="
                bg-stone-400/50 dark:bg-stone-800/50
                text-zinc-800 dark:text-zinc-200">
                {renderTHead()}
            </thead>
            <tbody className="text-zinc-700 dark:text-zinc-300 text-lg font-medium">
                {renderTableData()}
            </tbody>
        </table>
    )
}