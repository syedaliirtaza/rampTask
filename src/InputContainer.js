import React, {useEffect, useState} from 'react'
import "./InputContainerStyle.css"
function InputContainer({input}) {
    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        const liveTimer = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return () => {clearInterval(liveTimer)}
    }, [])

    if(input === ""){
        return (
            <div className='dateAndTimeContainer'>
            <span>{time.toLocaleString()}</span>
            </div>
        )
    } else if (Array.isArray(input)){
        return(
            <div className='arrayConatiner'>
                {input.map((item, index) => {
                   return <div key={index}>{item}</div>
                })}
            </div>
        )
    } else {
        return(
            <div className='randomContainer'> {input} </div>
        )
    }
}

export default InputContainer;