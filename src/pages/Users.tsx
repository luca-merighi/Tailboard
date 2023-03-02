import React from 'react'
import Head from 'next/head'

import useClients from '@/data/hook/useClients'

import Layout from '../components/template/Layout'
import CreateClientForm from '@/components/template/CreateClientForm'
import ClientTable from '@/components/template/ClientTable'

export default function Users() {
    const {client, clients, visible, setVisible, selectedClient, saveClient, deletedClient, handleCancelForm, handleOpenForm} = useClients()

    return (
        <React.Fragment>
            <Head>
                <link rel="shortcut icon" href="/tailwindcss.png" type="image/x-icon" />
                <title>Tailboard - Usuários</title>
            </Head>

        <Layout title="Usuários" subtitle="Aqui você pode gerenciar os usuários.">
            <header className="
                bg-stone-300 dark:bg-stone-700 p-4
                w-full
                flex items-center
                rounded-md">
                <button 
                onClick={handleOpenForm}
                className={`
                    bg-sky-500 p-4 w-44
                    text-md text-zinc-100 
                    border-2 border-sky-500
                    rounded-md
                    transition-colors
                    hover:bg-sky-600
                    hover:border-sky-600
                    focus:outline-none
                    focus:bg-sky-600
                    focus:border-stone-700`}>
                    Cadastrar Usuário
                </button>
            </header>

            {visible ? (
                <CreateClientForm
                    client={client}
                    visible={visible}
                    setVisible={setVisible}
                    changedClient={saveClient}
                    handleCancelForm={handleCancelForm} />
            ) : false}
            

            <ClientTable 
                clients={clients}
                selectedClient={selectedClient}
                deletedClient={deletedClient} />
        </Layout>
        </React.Fragment>
    )
}

// Zinc para Textos
// Stone para Bg