import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const BasicCard=({text,numerical,onClick})=>{
  return (
    <Card sx={{ width: 250,margin:"25px 0",backgroundColor:"#F0F0F0F0",cursor:"pointer" }} onClick={()=>onClick()} elevation={0}>
      <CardContent>
        <Typography sx={{ paddingLeft:"15px",fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
        <Typography variant="body2" style={{fontWeight:"bold"}}>
          {numerical}
        </Typography>
      </CardContent>
    </Card>
  );
}
