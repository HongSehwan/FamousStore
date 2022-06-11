import NavMenu from "./nav";
import Footer from "./footer";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>AWESOME FOOD STORE</title>
            </Head>
            <NavMenu />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
