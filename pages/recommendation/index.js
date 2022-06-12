import Head from "next/head"
import Camera from "../../components/Camera"
import {AiFillHome} from "react-icons/ai"
import { motion } from "framer-motion"
import Link from "next/link"
import Camfirst from "../../components/Camfirst"
import { useState } from "react"
import Live from "../../components/Live"
import Song from "../../components/Song"

const Recommendation = () => {

    const [ camera, setCamera] = useState(false)

    const handleCamera = () => {
        camera ? setCamera(false): setCamera(true)
    }

    return (
        <div className="rec">
            <Head>
                <title>Recommend</title> 
            </Head>
            <div className="left">
                {
                    camera ? <Camera onTap={handleCamera}/> : <Camfirst onTap={handleCamera}/>
                }
                <div className="live">
                    <h1>Live analysis</h1>
                    <Live/>
                </div>
            </div>
            <div className="right">
                <h1>here shows your recommendations</h1> 
                <Song/>
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
                    background-color: rgba(66, 97, 158, 0.3);
                    display: flex;
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
                }
            `}</style>
        </div>
    )
}

export default Recommendation