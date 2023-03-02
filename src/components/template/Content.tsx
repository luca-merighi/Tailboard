interface ContentProps {
    children?: any
}

export default function Content(props: ContentProps) {
    return (
        <section className="flex flex-col gap-10">
            {props.children}
        </section>
    )
}