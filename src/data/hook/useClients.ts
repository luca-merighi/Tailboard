import { useState, useEffect } from 'react'
import Client from '@/model/Client'
import ClientRepo from '@/model/ClientRepo'
import ClientCollection from '@/firebase/ClientCollection'

export default function useClients() {
    const [client, setClient] = useState<Client>(Client.emptyClient())
    const [clients, setClients] = useState<Client[]>([])
    const [visible, setVisible] = useState(false)

    const repo: ClientRepo = new ClientCollection()

    useEffect(getAll, [])
    
    function getAll() {
        repo.getAll().then((clients) => {
            setClients(clients)
            setVisible(false)
        })
    }

    function selectedClient(client: Client) {
        setClient(client)
        setVisible(true)
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    async function deletedClient(client: Client) {
        await repo.delete(client)
        getAll()
    }

    function handleCancelForm() {
        setClient(Client.emptyClient())
        setVisible(false)
    }

    function handleOpenForm() {
        setClient(Client.emptyClient())
        setVisible(true)
    }

    return {
        client,
        clients,
        visible,
        setVisible,
        selectedClient,
        saveClient,
        deletedClient,
        handleCancelForm,
        handleOpenForm
    }
}