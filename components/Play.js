import logo from '../pages/assets/aitext.jpg'
import Image from 'next/image'
import Song from './Song'
import { useState, useImperativeHandle, forwardRef } from 'react'


const Play = forwardRef((props, ref) => {

    const [emo, setEmo] = useState('')
    const [song, setSong] = useState('')

    useImperativeHandle(ref, ()=> ({
        handleData(emo, song){
            setEmo(emo)
            setSong(song)
        }
    }))

    return(
        <div className="play">
            <div className='image'>
                <Image src={logo} alt="logo" width="200%" height="200%" objectFit="contain"/>
            </div>
            <p className='light'>You seem <span className='span'>{emo}</span></p>
            <p className='bold'>Try hearing <span className='span'>{song}</span></p>
            <Song song = {props.src}/>
            <style jsx>{`
                .light{
                    font-weight: lighter;
                    font-size: 0.8rem;
                }

                .bold{
                    font-weight: bold;
                    font-size: 1.1rem;
                }

                .span{
                    color: rgb(69, 128, 255)
                }

                .image{
                    width: 100%;
                    height: 40%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                .play{
                    width: 80%;
                    height: 90%;
                    background-color: white;
                    border-radius: 15px;
                    padding: 0.4rem;
                }
            `}</style>
        </div>
    )
})

export default Play