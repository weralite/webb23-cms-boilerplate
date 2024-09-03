import Header from '../header/Header';

//Uses config set global components for the layout
export default function Layout({ config, children }) {
    //Create at least a header and footer component

    const logoItem = config.content.menu.find(item => item.component === 'logo');
    const menuItem = config.content.menu.find(item => item.component === 'menu');
  
    const logo = logoItem?.logo || {};
    const menu = menuItem?.menu_items || [];

    return (
        <>
            <header>
            <Header logo={logo} menu={menu} />
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}