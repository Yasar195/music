const About = (props) => {

    const handlepop = props.handlepop

    return (
        <div className="popup">
            <p className="heading">About this platform</p>
            <p className="para">
                this is a platform build to recommend music based on emotion
            </p>
            <button
                onClick={()=>handlepop(false)}
            >close</button>
            <style jsx>{`
                .heading{
                    color: #0085FF;
                    font-size: 0.7rem;
                    text-align: center;
                }                 
            
                .para{
                    font-size: 0.6rem;
                    text-align: center;
                }

                button{
                    border: none;
                    outline: none;
                    padding: 0.2rem;
                    background-color: #0085FF;
                    border-radius: 10px;
                    color: white;
                    font-size: 0.7rem;
                }

                .popup{
                    width: 30%;
                    position: absolute;
                    padding: 0.5rem;
                    border-radius: 15px;
                    background-color: white;
                    left: 35%;
                    top: 30%;
                    z-index: 10;
                }
            `}</style>
        </div>
    )
}

export default About