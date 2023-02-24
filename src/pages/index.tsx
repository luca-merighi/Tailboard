import React from 'react'
import Head from 'next/head'

import Layout from '@/components/template/Layout'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/tailwindcss.png" type="image/x-icon" />
        <title>Tailboard - Home</title>
      </Head>

      <Layout
        title="Home"
        subtitle="Página inicial do Dashboard">

      </Layout>
    </React.Fragment>
  )
}
