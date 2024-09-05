import Header from './Header';
import Footer from './Footer';

//Uses config set global components for the layout
export default function Layout({ config, children }) {
    //Create at least a header and footer component

    return (
        <>
            <Header config={config} />
            <main>{children}</main>
           <Footer config={config}/>
        </>
    );
}