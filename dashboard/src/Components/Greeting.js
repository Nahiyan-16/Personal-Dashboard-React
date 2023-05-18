import {useState, useEffect} from "react"

function Greeting(){
    // const [greetingData, setGreetingData] = useState(
    //     Greeting = {
    //         word: "Hello",
    //         language: "English"
    //     },
    //     Name =  ""
    // )

    const [nameBody, setNameBody] = ((
        <h2 id="showName">
        <p>Hello, what is your name?</p>
            <input id="getShowName" type='textarea' />
        </h2>
    ))

    function renderName(){
        let name = localStorage.getItem('name')
        if(name){
            fetch('https://www.greetingsapi.com/random')
            .then(res=>res.json())
            .then(data=>{
                setNameBody((
                    <>
                        <h2>${data.greeting}, ${name} 👋</h2>
                        <p><a href='https://www.google.com/search?q=${data.language}+language' target='_blank'>(${data.language})</a></p>
                    </>
                ))
            })
        }
    }

    useEffect(()=>{
        renderName()
    },[])

    return (
        <div id="insertName"></div>
    )
}

export default Greeting