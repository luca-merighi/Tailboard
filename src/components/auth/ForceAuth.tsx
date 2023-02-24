import Head from 'next/head'
import Image from 'next/image'
import LoadingGif from '../../../public/loading.gif'

import useAuth from '@/data/hook/useAuth'
import router from 'next/router'

interface ForceAuthProps {
    children?: any
}

export default function ForceAuth(props: ForceAuthProps) {
    const {user, loading} = useAuth()

    function renderContent() {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie?.includes("tailboard-auth")) {
                                window.location.href = "/Authentication"
                            }
                        `
                    }} />
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className="flex items-center justify-center h-screen w-screen">
                <Image src={LoadingGif} alt="Loading GIF" />
            </div>
        )
    }

    if(!loading && user?.email) {
        return renderContent()
    } else if(loading) {
        return renderLoading()
    } else {
        router.push('/Authentication')
        return null
    }
    
}