import React,{useState,useEffect} from "react";
import "./App.css"
import Booking from "./pages/booking";
import Attendance from "./pages/attendance";

const App = () => {

  const [data, setData] = useState([{}])
  const [content, setContent] = useState('bookng')

  useEffect(() =>{
    fetch("http://localhost:5000/example").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
        console.log(data.set)
      }
    )
  },[])

  const showPage = () => {
    if(content === 'booking'){
      return(
        <Booking></Booking>
      ) 
    }else{
      return(
        <Attendance></Attendance>
      )
    }
  }

  return(
    <header>
      <h1>test</h1>
      <nav>
        <ul>
          <li><a>Labor buchen</a></li>
          <li><a>Anwesenheiten</a></li>
        </ul>
      </nav>
      <main>
        {
          showPage()
        }    
      </main>
    </header>
  )
}

export default App
