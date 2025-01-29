import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { Box } from '@mui/material';
import '@styles/layout.scss';
//import Footer from '@components/Footer';
const Layout = ({ children }) => { 
    return (
        <Box className='Layout'>
                <Header/>
                {children}
                <Footer />
        </Box>
    );
}
export default Layout;
