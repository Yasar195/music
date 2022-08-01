import { useState, useImperativeHandle, forwardRef } from 'react'
import { ImHappy2, ImSad2 } from 'react-icons/im'

const Live = forwardRef((props,ref) => {

    const [happy, setHappy] = useState(true)

    useImperativeHandle(ref, ()=>({
        handleEmotion(emotion){
            if(emotion=="happy" || emotion=="surprice"|| emotion=="neutral" || emotion=="fear"){
                setHappy(true)
            }
            else{
                setHappy(false)
            }
        }
    }))
    return(
        <div className='live'>
            {
                happy ? (
                    <div>
                        <ImHappy2 color='rgb(66, 97, 158)'/>
                        <ImSad2 color="#7393B3"/>
                    </div>
                ):
                (
                    <div>
                        <ImHappy2 color="#7393B3"/>
                        <ImSad2 color='rgb(66, 97, 158)'/>
                    </div>
                )
            }
            <style jsx>{`
                .live{
                    width: 100%;
                }

                .live div{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }
            `}</style>
        </div>
    )
})

export default Live