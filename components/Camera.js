import Webcam from "react-webcam"
import { BsCameraVideoOffFill } from 'react-icons/bs'
import { AiFillCamera } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'
import { motion } from "framer-motion"
import React, { useState } from "react"

const Camera = (props) => {

    const handleCamera = props.onTap
    const handleConnection = props.handleConnection
    const [image, setImage] = useState('')
    const [aud, setAud] = useState('')

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    const webcamRef = React.useRef(null)
    const capture = React.useCallback(()=> {
        const imageSrc = webcamRef.current.getScreenshot()
        const data = {imageSrc}
        setImage(imageSrc)
        handleConnection(data)
    }, [webcamRef])

    const refresh = () => {
        setImage('')
    }

    return(
        <div className="cam">
            {
                aud !== "" && <audio controls src={aud}/>
            }
            {
                image == ''?
                <div>
                    <Webcam 
                        height={'200px'}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                    <div className="btns">
                        <motion.div
                            whileHover={{
                                cursor: 'pointer',
                                color: 'black',
                            }}
                        >

                            <div className="btn" onClick={handleCamera}>
                                <BsCameraVideoOffFill color={"red"}/>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                cursor: 'pointer'
                            }}
                        >
                            <div className="btn" onClick={capture}>
                                <AiFillCamera color={"green"}/>
                            </div>
                        </motion.div>
                    </div>
                </div>   
                : <div>
                    <img src={image}/>
                    <div className="btns">
                        <motion.div
                            whileHover={{
                            cursor: 'pointer',
                            color: 'black',
                            }}
                        >
                            <div className="btn" onClick={refresh}>
                                <FiRefreshCcw color={"blue"}/>
                            </div>
                        </motion.div>
                    </div>
                </div> 
            }
            <style jsx>{`
                .cam{
                    padding: 1rem;
                }

                .btns{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: white;
                    border-radius: 15px;
                }

                .btn{
                    width: fit-content;
                    padding: 0.2rem 0.5rem;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>            
        </div>
    )
}

export default Camera