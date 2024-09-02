import React, { useState } from "react";
import memes from "../assets/memedData";


export default function Main(){
    let memeUrl;
    function memesReturn(e){
        const memesArray = memes.data.memes;
        memeUrl = memesArray[Math.floor(Math.random()*memesArray.length)].url
        console.log(memeUrl)
        e.preventDefault();
        return memeUrl
    }


    function meme(){
        console.log(memeUrl)
    }
meme()
    

    return(
        <main>
            <form>
                <label>Top Text
                <input className="input" type="text" placeholder= "Top Text"/>
                </label>
                <label>Bottom Text
                <input className="input" type="text" placeholder="bottom text"/>
                </label>
                <button onClick={memesReturn}  className="button">Get a new meme image  🖼 </button>
                <div>
                <img className="imgStyle" src={memeUrl} alt="asd" />
                </div>
                
            </form>
        </main>
    )
}