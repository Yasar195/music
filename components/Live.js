import { ImHappy2, ImSad2 } from 'react-icons/im'

const Live = () => {
    return(
        <div className='live'>
            <ImHappy2/>
            <ImSad2/>
            <style jsx>{`
                .live{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

export default Live