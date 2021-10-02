import * as React from 'react';
import {useState, useEffect} from "react";

import { CircularProgress, Box } from '@material-ui/core';

const Home = () => {

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 13));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);
    
    return (
        <>
            <div className="welcome-message">
                <h1>Welcome to the ETD Logging Headquarter</h1>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress variant="determinate" value={progress} />
                </Box>
            </div>
            
        </>
        
    );
}

export default Home;