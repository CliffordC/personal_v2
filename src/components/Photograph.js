import React from 'react';
import Gallery from "react-photo-gallery";
import { photos } from '../media/Gallery/photos';


const Photograph = () => {

    return (
        <div>
            <p>Photograph</p>
            <Gallery photos={photos} />
        </div>
    )
}

export default Photograph;