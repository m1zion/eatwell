import {Box,Typography } from "@mui/material";
import React from "react";
import './dashboard.scss';
import BeneficiaryCard from "./BeneficiaryCard"; 
import NoticiasSlide from './NoticiasSlide';
const Dashboard = () => {
    const beneficiarios = [
        { amount: 24.08, nombre: "Juan Pérez", id: "AV330923" },
        { amount: 50.15, nombre: "María López", id: "AV330924" },
        { amount: 75.30, nombre: "Carlos Gómez", id: "AV330925" },
    ];
    return (
        <Box className="dashboard_container">
            <Box className="dashboard_bienvenida">
                <Typography sx={{fontWeight:"600"}} variant="h6">Bienvenido</Typography>
                <Typography sx={{fontWeight:"600"}}>Nombre del Usuario</Typography>
                <Typography>Estamos comprometidos en brindarte el mejor servicio.</Typography>
            </Box>
            <Box className="dashboard_beneficiarios">
                <Typography sx={{fontWeight:"600",mb:".5rem"}} variant="h6">Beneficiarios</Typography>
                <Box className="beneficiarios_container">
                {beneficiarios.map((beneficiary, index) => (
                    <BeneficiaryCard
                        key={index}
                        amount={beneficiary.amount}
                        nombre={beneficiary.nombre}
                        id={beneficiary.id}
                    />
                ))} 
                </Box>
            </Box>
            <Box className="dashboard_beneficiarios">
                <Typography sx={{fontWeight:"600",mb:".5rem"}} variant="h6">Noticias</Typography>               
            </Box>
            <NoticiasSlide/>
        </Box>    
    )
}
export default Dashboard;