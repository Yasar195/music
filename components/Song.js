import { useState } from 'react'


const Song = (props) => {

    const [playing, setPlaying] = useState(false)

    return(
        <div>
            <audio
                controls
                src={props.src}
            >
                
            </audio>
        </div>
    )
}

export default Song