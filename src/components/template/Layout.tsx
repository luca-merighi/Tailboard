import useAppData from '@/data/hook/useAppData'
import ForceAuth from '../auth/ForceAuth'

import Sidebar from './Sidebar'
import Header from './Header'
import Content from './Content'

interface LayoutProps {
    title: string,
    subtitle: string,
    children?: any
}

export default function Layout(props: LayoutProps) {
    const {theme} = useAppData()

    return (
        <ForceAuth>
            <div className={`
            ${theme}
            h-screen w-screen flex flex-col md:flex-row 
            `}>
                <Sidebar />

                <main className="
                    flex flex-col gap-8 
                    bg-stone-200 dark:bg-stone-800 w-full h-full p-8 ">
                    <Header
                        title={props.title}
                        subtitle={props.subtitle} />

                    <Content>
                        {props.children}
                    </Content>
                </main>
        </div>
        </ForceAuth>
    )
}