import Head from "next/head"
import Camera from "../../components/Camera"
import {AiFillHome} from "react-icons/ai"
import { motion } from "framer-motion"
import Link from "next/link"
import Camfirst from "../../components/Camfirst"
import { useState, useEffect, useRef } from "react"
import Live from "../../components/Live"
import Play from "../../components/Play"
import Unplay from "../../components/Unplay"
import axios from "axios"

const Recommendation = () => {

    const [ camera, setCamera] = useState(false)
    const [ arrived, setArrived ] = useState(false)
    const [ src, setSrc ] = useState("")
    const playRef = useRef(null)
    const liveRef = useRef(null)

    const handleCamera = () => {
        camera ? setCamera(false): setCamera(true)
    }

    const updateState = (emo, song) => {
        playRef.current.handleData(emo, song)
        liveRef.current.handleEmotion(emo)
    }

    const handleConnection = (data) => {
        fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response)=> {
            return response.json()
        })
        .then((json)=> {
            updateState(json.emotion, json.name)
            axios.get('http://localhost:5000', {params: { emo: json.emotion, id: json.id}})
            .then(response => {
                let binaryData = [];
                binaryData.push(response.data);
                window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
            })
        })
        setArrived(true)
    }


    const value = 0

    useEffect(()=> {
    }, [value])

    return (
        <div className="rec">
            <Head>
                <title>Recommend</title> 
            </Head>
            <div className="left">
                {
                    camera ? <Camera handleConnection = {handleConnection} onTap={handleCamera} arrived={setArrived}/> : <Camfirst onTap={handleCamera}/>
                }
                <div className="live">
                    <p>Live analysis</p>
                    <Live ref={liveRef}/>
                </div>
            </div>
            <div className="right">
                {
                    arrived ? <Play ref={playRef}/> : <Unplay/>
                }
            </div>
            <Link href="/"><div className="home">
                <motion.span
                    whileTap={{
                        scale: 0.9
                    }}
                    whileHover={{
                        scale: 1.1,
                        cursor: 'pointer'
                    }}
                ><AiFillHome size={"23px"} color="#0085FF"/></motion.span>
            </div></Link>
            <style jsx>{`
                .rec{
                    width: 100%;
                    height: 100vh;
                    background-color: rgba(66, 97, 158, 0.8);
                    display: flex;
                }

                .right{
                    width: 40%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .pilot{
                    width: 100%;
                    height: 100%;
                }

                .left{
                    width: 60%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .home{
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                    box-shadow: 1px 1px 5px black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: white;
                }

                .live{
                    width: 80%;
                    height: 20%;
                    background-color: white;
                    position: relative;
                    top: 1rem;
                    border-radius: 15px;
                    padding: 2px;
                }

                .live p{
                    font-weight: light;
                    font-size: 0.6rem;
                    color: rgb(66, 97, 158);
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

export default Recommendation