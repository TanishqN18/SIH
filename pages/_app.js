import "../styles/globals.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                
                <title>Pbase</title>
            </Head>
            <Navbar/>
            
                <Component {...pageProps} />
            
           
        </>
    );
}

export default MyApp;