import React, { useState } from "react";
import memes from "../assets/memedData";

export default function Main() {
    let [meme, setMeme] = useState("");


    function memesReturn(ev) {
        const memesArray = memes.data.memes;
        const random = Math.floor(Math.random() * memesArray.length);
        setMeme(memesArray[random].url);
        ev.preventDefault()
    }

    return (
        <main>
            <form>
                <label>
                    Top Text
                    <input className="input" type="text" placeholder="Top Text" />
                </label>
                <label>
                    Bottom Text
                    <input className="input" type="text" placeholder="bottom text" />
                </label>
                <button onClick={memesReturn} className="button">
                    Get a new meme image  🖼
                </button>
                <div>
                    <img className="imgStyle" src={meme} alt="" />
                </div>
            </form>
        </main>
    );
}
