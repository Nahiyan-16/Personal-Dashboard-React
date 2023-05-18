import { useState, useEffect } from "react"
import Greeting from './Components/Greeting'

function Time(){
    const [time, setTime] = useState()
    function getCurrentTime() {
        const date = new Date()
        setTime(date.toLocaleTimeString("en-us", {timeStyle: "short"}))
    }
    
    setInterval(getCurrentTime, 1000)
    return (
        <div className="time">
            <h1 id="time">{time}</h1>
            <Greeting />
        </div>
    )
}

export default Time