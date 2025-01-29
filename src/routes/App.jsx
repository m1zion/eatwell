import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@pages/Login/';
import Dashboard from '@pages/Dashboard/';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Layout from '@containers/Layout';
import '@styles/global.css';
const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>                        
                    <Route exact path="/" element={<Login/>} />    
                    <Route exact path="/Dashboard" element={<Layout><Dashboard/></Layout>} />                              
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
export default App;