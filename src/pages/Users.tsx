import React from 'react'
import Head from 'next/head'

import Layout from '../components/template/Layout'

export default function Users() {
    return (
        <React.Fragment>
            <Head>
                <link rel="shortcut icon" href="/tailwindcss.png" type="image/x-icon" />
                <title>Tailboard - Usuários</title>
            </Head>

        <Layout title="Usuários" subtitle="Aqui você pode gerenciar os usuários">

        </Layout>
        </React.Fragment>
    )
}