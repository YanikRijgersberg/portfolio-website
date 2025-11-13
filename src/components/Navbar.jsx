import { Link,Outlet } from "react-router-dom";
import "../css/Navbar.css";
import home from '../pages/Home.jsx';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#Himg1">Home</a></li>
          <li><a href="#OMtitle1">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#PmainTitle">Projecten</a></li>
          <li><a href="#Ctitle">Contact</a></li>
          {/* <li><Link to="#Himg1">Home</Link></li> */}
          {/* <li><Link to="#">About</Link></li> */}
          {/* <li><Link to="#">skils</Link></li> */}
          {/* <li><Link to="#">Projects</Link></li> */}
          {/* <li><Link to="#">Contact</Link></li> */}
        </ul>
        <Outlet/>
      </nav>
   
    </>
  );
};

export default Navbar;
