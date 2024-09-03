export default function Grid({ blok }) {
    return (
        <section className="w-full flex justify-center">
            <div className="flex flex-wrap gap-10 p-8 max-w-screen-xl mx-auto justify-center">
                {blok.columns.map((item) => (
                    <div
                        key={item._uid}
                        className="flex flex-col items-center w-[150px] mx-2" // Added horizontal margin for spacing
                    >
                        <img
                            src={item?.image?.filename}
                            alt={item?.image?.alt || "Image"}
                            className="w-full h-40 object-cover mb-4 rounded"
                        />
                        <h3 className="text-xl font-bold mb-2 text-center">{item?.title}</h3>
                        <p className="text-gray-700 text-center">{item?.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
