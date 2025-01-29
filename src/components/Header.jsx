import React, {useState} from 'react';
import { AppBar, Badge, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '@styles/header.scss';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BalanceIcon from '@mui/icons-material/Balance';
import SettingsIcon from '@mui/icons-material/Settings';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Header() {
    const pages = ['Cuenta','Recargar','FAQ','Términos y condiciones','Soporte','Ajustes', 'Cerrar Sesión'];
    const [open, setOpen] = React.useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    const DrawerList = (
        <Box className="menu_list_container" role="presentation" onClick={toggleDrawer(false)}>
            <List>               
                <ListItem disablePadding>
                    <ListItemButton>
                        <Typography>Nombre del usuario</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Typography sx={{color: "#5CAED1"}}>C.I  1763982974</Typography>
                    </ListItemButton>
                </ListItem>
                <Divider  sx={{mb:"2rem", mt:"1rem"}}></Divider>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MonetizationOnIcon sx={{color:"var(--darkBlue)"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Recargar" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <QuestionMarkIcon sx={{color:"var(--darkBlue)"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Preguntas frecuentes" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BalanceIcon sx={{color:"var(--darkBlue)"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Términos y condiciones" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <WhatsAppIcon sx={{color:"#25D366"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Soporte" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon sx={{color:"var(--darkBlue)"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Ajustes" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Box>
                <Box className="social_container">          
                    <a className="instagram" href="https://www.facebook.com/" target='blank'> <FacebookIcon sx={{color:"var(--darkBlue)"}}/></a>
                    <a className="instagram" href="https://www.instagram.com/" target='blank'> <InstagramIcon sx={{color:"var(--darkBlue)"}}/></a>                        
                </Box>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon sx={{color:"var(--darkBlue)"}}/>
                            </ListItemIcon>
                            <ListItemText primary="Cerrar sesión" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>        
        </Box>
    );

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar className="dashboard_toolbar">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className="dashboard_menu"
                    onClick={toggleDrawer(true)}
                    sx={{ mr: 2 }}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography variant="h7" component="div" sx={{ flexGrow: 1,display: { xs: 'flex', md: 'none' }}}>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{fontWeight:'600', textTransform:'none', my: 2, color: 'var(--darkBlue)', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>

                    <IconButton
                    size="large"
                    aria-label="show 3 new notifications"
                    color="inherit"
                    >
                        <Badge badgeContent={3} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </Box>
    )
}