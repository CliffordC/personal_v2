import React from 'react';
import Gallery from "react-photo-gallery";
import { photos } from '../media/Gallery/photos';

const ScreenStyles = {
    background : {
        display: 'flex',
        height: '100%',
        width: '100%',
        blurRadius: '50px',
        filter: 'blur(100%)'
    },
}


const Photograph = () => {

    return (
        <div style={ScreenStyles.background}>
            
            <p>Photograph</p>
            <Gallery photos={photos} />
        </div>
    )
}

export default Photograph;