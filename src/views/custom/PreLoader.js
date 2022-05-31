import React from 'react';
import { CircularProgress } from '@mui/material';

const PreLoader = () => {
    return (
        <div style={{display: "flex", textAlign: "center", justifyContent:"center", padding:"50px", fontSize: "40px"}}>
            <CircularProgress color="primary" />
        </div>
    );
};

export default PreLoader;