import React from 'react';
import Footer from './Footer';

const homeStyles = {
    background : {
        //backgroundImage: `url(${Image})`,
        height: '50vh',
        width: '100vw',
        marginTop: '25%'
        
    },
    content : {
        display: 'flex',
        justifyContent: "center",
        textAlign: 'center',
        fontSize: '2.5em',
        letterSpacing: '.55em'
    },
}

const MainContent = () => {
    return (
        <div style={homeStyles.content}>
            <p>Howdy</p>
        </div>
    )
}

const Home = () => {

    return (
        <div style={homeStyles.background}>
            <MainContent />
            <Footer />
        </div>
    )
}

export default Home;