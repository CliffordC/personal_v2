import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import EventsImage from '../media/Events.png'

const pageStyles = {
    base : {
        display: 'flex',
        marginTop: "10em",
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'row nowrap',
    },
    projectOne : {
        cursor: 'pointer',
        paddingRight: '15px',
    },
    projectTwo : {
        cursor: 'pointer',
    },
}


const ProjectOne = () => {

    const handleClick = () => {
        window.open('https://github.com/afoyer/EventsApp')
    }

    return (
        <div style={pageStyles.projectOne}>
            <Card sx={{ minWidth: 275 }}>
                <CardActionArea>
            <CardContent>
            <Typography sx={{ fontSize: 14, textAlign:'center' }} color="text.secondary" gutterBottom>
            Events App
            </Typography>
            <CardMedia
                component="img"
                height="140"
                image={EventsImage}
                alt="Events App"
            />
            <Typography variant="body2">
            An event aggregate app for browsing school events.
            </Typography>
            
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClick}>Git</Button>
        </CardActions>
        </CardActionArea>
        </Card>
     </div>
    )
    
}

const ProjectTwo = () => {

    const handleClick = () => {
        window.open('https://github.com/CliffordC/quakes')
    }

    return (
        <div style={pageStyles.projectTwo}>
            <Card sx={{ minWidth: 275 }}>
                <CardActionArea>
            <CardContent>
            <Typography sx={{ fontSize: 14, textAlign:'center' }} color="text.secondary" gutterBottom>
            Earthquake Locator
            </Typography>
            <Typography variant="body2">
            A web app that helps users find <br/>earthquake locations near major cities.
            </Typography>
            
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClick}>Git</Button>
        </CardActions>
        </CardActionArea>
        </Card>
     </div>
    )
    
}


const Work = () => {

    return (
        <div style={pageStyles.base}>
            <ProjectOne />
            <ProjectTwo />
        </div>
    )
}

export default Work;