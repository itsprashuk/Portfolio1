import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialmedia'>
           <a href='https://www.instagram.com/prashukjain_111/'><InstagramIcon/></a> 
            <a href='https://www.linkedin.com/in/prashuk-jain-6677381a3/'><LinkedInIcon/></a>
           <a href='https://www.linkedin.com/in/prashuk-jain-6677381a3/'><FacebookIcon/></a> 
           
            </div>
            <p>&copy: 2023Prashuk Jain</p>
    </div>
  )
}

export default Footer