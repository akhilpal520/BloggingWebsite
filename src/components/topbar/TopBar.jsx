import { Link } from "react-router-dom";
import "./topbar.css"

export default function topbar() {
  const user = true;
  return (
    <div className="top">
     <div className="topLeft">
     <i className="topIcon fa-brands fa-square-facebook"></i>
     <i className="topIcon fa-brands fa-square-x-twitter"></i>
     <i className="topIcon fa-brands fa-square-pinterest"></i>
     <i className="topIcon fa-brands fa-square-instagram"></i></div>
     <div className="topCenter">
        <ul className="topList">
        <li className="topList"></li>
            <li className="topListItem">
              <Link to="/" className="link" >HOME</Link>
            </li>
            <li className="topListItem">
            <Link to="/about" className="link" >ABOUT</Link></li>
            <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
            <li className="topListItem">
              <Link to="/write" className="link">WRITE</Link>
            </li>
            <li className="topListItem">{user && "LOGOUT"} </li>
        </ul>
     </div>
     <div className="topRight">
     {
      user ? (
     <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

    ): (
      <ul className="topList">
      <li className="topListItem">
      <Link to="/login" className="link" >LOGIN</Link>
      </li>
      <li className="topListItem">
      <Link to="/register" className="link" >REGISTER</Link>
      </li>
      </ul>
    )
     }
     </div>
     <li className="topList"></li>
      <li className="topList"></li>
     <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

    </div>
  )
}

