import logo from '../pages/assets/aitext.jpg'
import pilot from '../pages/assets/pilot.jpg'
import Image from 'next/image'

const Unplay = () => {
    return (
        <div className="unplay">
            <Image src={logo} objectFit="contain" width="200%" height="200%"/>
            <Image src={pilot} objectFit="contain" width="200%" height="200%"/>
            <style jsx>{`
                .unplay{
                    width: 90%;
                    height: 90%;
                    background-color: white;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    flex-direction: column;
                }
            `}</style>
        </div>
    )
}

export default Unplay