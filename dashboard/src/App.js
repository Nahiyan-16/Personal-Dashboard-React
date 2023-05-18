import './App.css';
import {useState, useEffect} from 'react'
import Bookmark from './Components/Bookmark'
import Weather from './Components/Weather'
import Time from './Components/Time'

function App() {

  const [background, setBackground] = useState({
    backgroundImg: {
    backgroundImage: `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }, author: `Photo: Dodi Achmad`})

  useEffect(()=>{
    fetch("https://api.unsplash.com/photos/random?query=nature&client_id=P1Qo9LPylsLT9IsyEINd-LFdSTeENYO4x9olDXp7zfM")
    .then(res => res.json())
    .then(data => {
      setBackground({backgroundImg: {
          backgroundImage: `url(${data.urls.raw})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }, author: `${data.user.name}`})
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div className="App" style={background.backgroundImg}>
      <div className='top'>
        <Bookmark />
        <Weather />
      </div>
        <Time />
        <p></p>
    </div>
  );
}

export default App;
