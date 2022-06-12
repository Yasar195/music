import Webcam from "react-webcam"
import { BsCameraVideoOffFill } from 'react-icons/bs'
import { motion } from "framer-motion"

const Camera = (props) => {

    const handleCamera = props.onTap

    return(
        <div className="cam">
            <Webcam height={'300px'}/>
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
            <style jsx>{`
                .cam{
                    padding: 1rem;
                }

                .btn{
                    width: fit-content;
                    padding: 0.2rem 0.5rem;
                    background-color: #0085FF;
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