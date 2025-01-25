import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@pages/Login/';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';
const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>                        
                    <Route exact path="/" element={<Login/>} />                             
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
export default App;