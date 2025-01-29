import React from "react";
import { Card, CardContent, Box, Typography, Avatar } from "@mui/material";

const BeneficiaryCard = ({ amount, nombre, id }) => {
  return (
    <Card  className="beneficiarios_card" variant="outlined">
      <CardContent className="beneficiarios_cardContent">
        <Box className="saldo_disponible">
          <Typography gutterBottom variant="h4" sx={{ fontWeight: "600" }}>
            ${amount.toFixed(2)}
          </Typography>
          <Typography>Saldo Disponible</Typography>
        </Box>
        <Box className="datos_beneficiario_container">
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {nombre.charAt(0)}
          </Avatar>
          <Box>
            <Typography sx={{ color: "text.secondary" }}>{nombre}</Typography>
            <Typography variant="body2">{id}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BeneficiaryCard;