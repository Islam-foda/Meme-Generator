
import { React,  useEffect, useState } from "react";
import {nanoid} from "nanoid"

export default function Main() {
  let [meme, setMeme] = useState("");
  let [isBig, setIsBig] = useState(true);
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
    
  function memesReturn() {
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
    <main>
      <div className="form">
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
          onMouseOver={() => setIsBig(!isBig)}
          onMouseLeave={() => setIsBig(!isBig)}
          onClick={memesReturn}
          id="btnStyle"
          className="button"
          style={{ transform: isBig ? "scale(1)" : "scale(1.05)" }}          
        >
          Get a new meme image 🖼{" "}
        </button>
        <div>
          {memeData.topText && <h3 key={nanoid()} className="top">{memeData.topText}</h3>}
          <img className="imgStyle" src={memeData.memeImage} alt="asd" />
          {memeData.bottomText && <h3 key={nanoid()} className="bottom">{memeData.bottomText}</h3>}
        </div>
      </div>
    </main>
  );
}