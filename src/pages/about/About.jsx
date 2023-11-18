import { Link } from "react-router-dom"
import "./about.css"

export const About = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="writeImg" src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p>Embark on a thrilling journey with me, Akhil Pal, your guide through the mesmerizing tapestry of the world. As a fervent traveler and dedicated storyteller, I invite you to immerse yourself in the magic of discovery. Together, we'll uncover the secrets of hidden gems, navigate the bustling streets of vibrant cities, and bask in the serenity of untouched landscapes. From the towering peaks of majestic mountains to the tranquil shores of exotic beaches, every destination holds a unique story waiting to be told. Let's forge unforgettable memories, connect with diverse cultures, and celebrate the beauty that lies in every corner of our planet. Join me in turning each page of this travelogue, where every adventure is a chapter, and every chapter is a chance to be captivated by the wonders of our world. Welcome to my world of wanderlust—where the journey is as extraordinary as the destinations themselves!</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarSocial">
     <i className="sidebarIcon fa-brands fa-square-facebook"></i>
     <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
     <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
     <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      </div>
    </div>
  )
}
