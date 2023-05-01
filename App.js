import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Education from './component/Education'
import Experience from './component/Experience'
import Project from './component/Project'
import ContactUs from './component/ContactUs'
import NavBar from './component/NavBar'

const App = () => {
  return(
    <>
    <div className='heading'>
    <p>Ritik</p>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<NavBar/>}>
  <Route index element={<Home/>}/>
  <Route path="education" element={<Education/>}/>
  <Route path="experience" element={<Experience/>}/>
  <Route path="project" element={<Project/>}/>
  <Route path="contactus" element={<ContactUs/>}/>
  </Route>
  </Routes>
  </BrowserRouter>
  </div>
  </>
  )
}
export default App