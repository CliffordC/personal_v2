import React from 'react';

const FootStyles = {
    footer : {
      fontStyle: "italic",
      position: 'absolute',
      bottom: 0,
      textAlign: 'center',
      fontSize: '25',
      color: 'white',
      width: '100%',
      height: '60px',   /* Height of the footer */
    },
  
  }

const Footer = () =>{
    return (
        <div style={FootStyles.footer}>
          <p>@Clifford 2021</p>
        </div>
    )
}

export default Footer;