export default function Footer({ config }) {
    const title = config.content.title
    return (
      <footer className="bg-white text-black p-8">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-center">
            &copy; {new Date().getFullYear()}, {title}
          </p>
        </div>
      </footer>
    );
  }