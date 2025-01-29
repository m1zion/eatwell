import React from 'react';
import '@styles/footer.scss';
import { Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () =>{
    return(
        <footer className="footer">
            <Box className="social_container_footer">          
                    <a href="https://www.facebook.com/"  target='blank'> <FacebookIcon sx={{color:"var(--white)"}}/></a>
                    <a href="https://www.instagram.com/" target='blank'> <InstagramIcon sx={{color:"var(--white)"}}/></a>   
                    <a href="https://www.instagram.com/" target='blank'> <WhatsAppIcon sx={{color:"var(--white)"}}/></a>    
                    <a href="https://www.youtube.com/"   target='blank'> <YouTubeIcon sx={{color:"var(--white)"}}/></a>      
                    <a href="https://www.LinkedIn.com/"  target='blank'> <LinkedInIcon sx={{color:"var(--white)"}}/></a>                         
            </Box>
            <Box className="social_container_footer">  
            <Typography>&copy;Eat Well. Derechos reservados. v0.1.1</Typography>
            </Box>
        </footer>      
);
}
export default Footer;