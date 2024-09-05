export default function ImageWithText({ blok }) {
    return (
        <section className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <img 
                src={blok?.image?.filename} 
                alt={blok?.image.alt || 'Teaser Image'} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{blok?.title}</h3>
                <p className="text-gray-700">{blok?.text}</p>
            </div>
        </section>
    )
}
