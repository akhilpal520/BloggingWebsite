import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images.pexels.com/photos/18867836/pexels-photo-18867836/free-photo-of-a-person-walking-on-the-beach-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <form className="write">
            <div className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                    
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story....." type="text" className="writeInput writeText" ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </div>

        </form>
      
    </div>
  )
}
