import {Link,Outlet} from 'react-router-dom'

const NavBar = () => {
    return(
        <>
        <nav>
        <div className='nav-link'>
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/project">Project</Link>
        <Link to="/contactus">ContactUs</Link>
        </div>
        </nav>
        <Outlet/>
        </>
    )
}
export default NavBar