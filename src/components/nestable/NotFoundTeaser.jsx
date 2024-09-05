export default function NotFoundTeaser({ blok }) {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            <h1 className="text-5xl font-bold mb-4">{blok?.headline}</h1>
            <p className="text-lg mb-8">{blok?.first_paragraph}</p>
        </section>
    )
}
