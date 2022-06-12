import { BsCameraVideoFill } from 'react-icons/bs'

const Camfirst = (props) => {

    const handleCamera = props.onTap

    return(
        <div className="div" onClick={handleCamera}>
            <BsCameraVideoFill size={"100px"} color="#0085FF"/>
            <style jsx>{`
                .div{
                    width: 40%;
                    height: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 3px 3px 10px black;
                    border-radius: 15px;
                    background-color: white;
                }
            `}</style>
        </div>
    )
}

export default Camfirst