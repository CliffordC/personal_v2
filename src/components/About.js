import React from 'react';
import Image from '../media/Cliff_07.png';

const containerStyle = {
    display: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'row nowrap',
    },
}
const paragraphStyle = {
    display : {
        order: 0,
    },
    margins : {
        margin: '10em',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Anonymous Pro, monospace',
    }
}

const portraitStyles = {
    pic : {
        order: 1,
        height: '50',
        width: '50',
    },
    borders : {
        borderRadius: 15,
    }
}

const Portrait = () => {
    return (
        <div>
            <img src={Image} alt="Logo" style={portraitStyles.borders}/>
        </div>
    )
}
const Paragraph = () => {

    return (
        <div style={paragraphStyle.margins}>
            <p>
                Hey there! I'm Clifford. <br />I'm a novice computer scientist 
                excited about learning new things and making helpful products. I wanted
                to practice using React so I made this site. 
            </p>
        </div>
    )
}


const About = () => {

    return (
        <div style={containerStyle.display}>
            <Paragraph style={paragraphStyle.display} />
            <Portrait style={portraitStyles.pic}/>
        </div>
    )
}

export default About;