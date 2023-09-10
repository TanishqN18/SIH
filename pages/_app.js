import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="public/github.png" />
                <title>Pbase</title>
            </Head>
            <Navbar/>
            
                <Component {...pageProps} />
            
            <Footer/>
        </>
    );
}

export default MyApp;