import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const Wait = () => {

    return (
        <Typography sx={{height: "400px" , display: "flex" , justifyContent:"center" , alignItems: "center" , width: "100% !important" }} component="div">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress  sx={{color: "red" }} />
            </Box>
        </Typography>
    );
}

export default Wait