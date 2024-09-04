// components/Header.js
export default function Header({ logo, menu }) {
    return (
      <header className="bg-white text-black p-8">
        <div className="container mx-auto flex items-center justify-between">
          {logo?.filename && (
            <div className="logo flex-shrink-0">
              <img
                src={logo.filename}
                alt="Logo"
                className="w-30 h-8" 
              />
            </div>
          )}
  
          {/* Rendera meny */}
          {menu?.length > 0 && (
            <nav className="hidden md:flex space-x-4">
              <ul className="flex space-x-4">
                {menu.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link?.cached_url || '#'}
                      className="hover:text-gray-600" 
                    >
                      {item.title || 'No Title'}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    );
  }
  