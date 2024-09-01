import memes from "../assets/memedData"

export default function Main(){
    function memesReturn(){
        const meme = memes.data.memes.map((ele)=>{
            return (ele.url)
        })
        return console.log(meme[Math.floor(Math.random()*meme.length)])
    }

    function genMeme(e){
    const meme = e.target;

    meme.background = memesReturn()
    e.preventDefault()
    }

    

    return(
        <main>
            <form>
                <label>Top Text
                <input className="input" type="text" placeholder= "Top Text"/>
                </label>
                <label>Bottom Text
                <input className="input" type="text" placeholder="bottom text"/>
                </label>
                <button onClick={genMeme}  className="button">Get a new meme image  🖼 </button>
            </form>
        </main>
    )
}