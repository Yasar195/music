import song from '../static/sample.mp3'
import { useState } from 'react'


const Song = () => {

    const [playing, setPlaying] = useState(false)
    const audio = new Audio(song)

    const pausePlay = () => {
        if(playing){
            audio.pause()
        }
        else{
            audio.play()
        }
        setPlaying(!playing)
    }
 
    return(
        <div>
            <h1>This is song display</h1>
            <p>{playing ? "song is playing": "song is not z"}</p>
        </div>
    )
}

export default Song