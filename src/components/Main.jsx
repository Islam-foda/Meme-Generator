import { useState, useEffect } from "react";
import {nanoid} from "nanoid"

export default function Main({darkMode}) {
  let [meme, setMeme] = useState("");
  const [memeData,setMemeData] = useState({
    topText: "",
    bottomText: "",
    memeImage: "https://i.imgflip.com/1bij.jpg",
  })
  
  useEffect(() => {
     fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json()).then((data) => 
      setMeme(data.data.memes));
    },[])
    
  function memesReturn(ev) {
    ev.preventDefault();
    let random = Math.floor(Math.random() * meme.length);
    let memeUrl = meme[random].url;
   setMemeData(preVal => {
    return {...preVal, memeImage: memeUrl}
   });
  }
  //function handleChange to update the state
  function handleChange(event) {
    const {name, value} = event.target
    setMemeData(preVal => {
      return {...preVal, [name]: value}
    })
  }


  return (
    <main className={`main ${darkMode ? "dark" : ""}`}>
      <form onSubmit={memesReturn}>
        <label>
          Top Text
          <input 
                    value={memeData.topText}
                    name="topText"
                    className="input" 
                    type="text" 
                    placeholder="Top Text"
                    onChange={handleChange}
                    />
        </label>
        <label>
          Bottom Text
          <input 
                    value={memeData.bottomText}
                    name="bottomText"
                    className="input" 
                    type="text" 
                    placeholder="bottom text"
                    onChange={handleChange}
                    />
        </label>
        <button
          type="submit"
          id="btnStyle"
          className={`button ${darkMode ? "dark" : ""}`}
         
        >
          Get a new meme image 🖼{" "}
        </button>
        </form>
        <div className="meme">
          {memeData.topText && <h3 key={nanoid()} className="top">{memeData.topText}</h3>}
 
          <img className= "imgStyle" src={memeData.memeImage} alt="random Image" />
          
          {memeData.bottomText && <h3 key={nanoid()} className="bottom">{memeData.bottomText}</h3>}
        </div>
      
    </main>
  );

}
