import React from 'react';
import Image from '../media/orange.jpg'


const homeStyles = {
    background : {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        width: '100vw',
        
    },
}

const Home = () => {

    return (
        <div style={homeStyles.background}>
            <p>Home</p>
        </div>
    )
}

export default Home;