import React,{useState,useEffect} from "react";
import "./App.css"
import Booking from "./pages/booking";
import Attendance from "./pages/attendance";

const App = () => {

  const [data, setData] = useState([{}])
  const [content, setContent] = useState('booking')

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
    <>
      <header id="app_header">
      <h1 id="app_headline">test</h1>
      <nav id="app_nav">
        <ul id="app_nav_list">
          <li id="app_nav_item_one"><a id="app_nav_item_one_link">Labor buchen</a></li>
          <li id="app_nav_item_two"><a id="app_nav_item_two_link">Anwesenheiten</a></li>
        </ul>
      </nav>  
    </header>
    <main id="app_main">
    {
      showPage()
    }    
    </main>
    </>
  )
}

export default App
