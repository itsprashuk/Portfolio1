import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
          <h2>Hi,My name is Prashuk Jain</h2>
          <div className='prompt'>
            <p>A MERN Stack developer with a passion for learning and creating.</p>
            
            <a href='https://www.linkedin.com/in/prashuk-jain-6677381a3/'><LinkedInIcon/></a>
            <a href='https://mail.google.com/mail/u/0/#inbox'><EmailIcon/></a>
           <a href='https://github.com/itsprashuk'> <GitHubIcon/></a>
          </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>FrontEnd</h2>
            <span>ReactJs,AngularJ,HTML,Css,Tailwind,Flutter,Npm,Ionic,Bootstrap,MaterialUi,StyledComponent</span>
          </li>
          <li className='item'>
            <h2>BackEnd</h2>
            <span>NodeJs,ExpressJs,Java,Mongodb,Sql,Firebase</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Java,Python,JavaScript</span>
          </li>
          

        </ol>
      </div>
    </div>
  )
}

export default Home