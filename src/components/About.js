import React from 'react';
import Image from '../media/Cliff_04.jpg';

const containerStyle = {
    display: {
        marginTop: '10em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'row nowrap',
    },
    footer : {
        //bottom: 0,
        //height: "60ox",
        paddingTop: '20em',
        color: 'green'
    }
}
const paragraphStyle = {
    display : {
        order: 0,
    },
    margins : {
        margin: '5em',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Anonymous Pro, monospace',
    }
}

const portraitStyles = {
    pic : {
       
    },
    borders : {
        order: 1,
        borderRadius: 15,
        height: '30em',
        width: '20em',
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
                excited about learning new things and hopefully making helpful products. I wanted
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