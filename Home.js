import React from 'react'
import index from '../index.css'
import { SocialIcon } from 'react-social-icons'

const Home = () =>  {
  return (
    <>
    <div className="heading">
    <p> Hi, i am Ritik</p>
    <p>khandelwal</p>
    <p>I am Full Stack Developer</p>
    <p>I have complete my Appentienship</p>
    <p> its like a training Six month duration</p>
    <a href="linkedlin.com/in/ritik-khandelwal-670542235"><SocialIcon url="https://linkedin.com/in/jaketrent" /></a>
    <a href="www.instagram.com"><SocialIcon url="https://instagram.com/in/jaketrent" /> </a>
    
    </div>
    <div className="image">
    <img src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg" height="380px" width="80%"></img>
    </div>
    
    </>
    
      
  
  )
}

export default Home
