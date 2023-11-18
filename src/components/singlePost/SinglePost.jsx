import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
            className="singlePostImg"/>
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square fa"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
         </h1>    
        <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Safak</b></span>
        <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore, corporis velit qui dolor facere. Quo nostrum, earum rerum distinctio quisquam nam voluptate quia dolorem dicta atque quis? Culpa, consequatur.   
        </p>
        </div>
    </div>
  )
}
