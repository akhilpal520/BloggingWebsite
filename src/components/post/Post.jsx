import "./post.css"  
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/18687546/pexels-photo-18687546/free-photo-of-a-green-surfboard-on-a-wooden-pier-overlooking-the-ocean.jpeg" alt="" />
      <div className="postInfo">
        <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet, </span>
        <hr />
        <span className="postDate">1 hour ago </span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ratione ea quasi odio iste, quisquam maxime! Et sint quas reprehenderit natus totam, voluptatum laudantium, consequatur sapiente aliquid incidunt omnis ad!</p>
    </div>
  )
}
