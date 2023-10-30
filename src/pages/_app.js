import '../styles/globals.css'
import { useEffect, useState } from "react";
import { AuthContextProvider } from '../contexts/AuthContext'
import { useContext } from 'react';
import { CarritoProvider } from '../contexts/CarritoContext';
import GlobalContext from '../contexts/GlobalContext';
import Footer from '../components/Footer/Footer';




function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}) {
    const [globals, setGlobals] = useState({
        openCartDrawer: false,
        openSideBar: false,
    });
    return (
        <AuthContextProvider>
            <CarritoProvider>
                
                <GlobalContext.Provider value={{ globals, setGlobals }}>
                    <Component {...pageProps} />
                    <Footer />
                </GlobalContext.Provider>
            </CarritoProvider>
        </AuthContextProvider>
    );
}

export default MyApp;