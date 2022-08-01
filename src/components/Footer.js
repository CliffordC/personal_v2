import React from 'react';

const FootStyles = {
    footer : {
      display: 'flex',
      justifyContent: 'center',
      fontStyle: "italic",
      bottom: '0%',
      textAlign: 'center',
      fontSize: '12px',
      color: 'inherit',
      width: '100%',
      height: '50px', /* Height of the footer */
      position:'fixed',
      margin: '0',
    },
  
  }

const Footer = () =>{
    return (
        <div style={FootStyles.footer}>
          <p>@Clifford 2022</p>
        </div>
    )
}

export default Footer;