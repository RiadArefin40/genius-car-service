import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getUTCFullYear()
    return (
       <footer className='text-center my-5'>
           <p>Copyright @{year}</p>
       </footer>
    );
};

export default Footer;