import React,{useState,useEffect} from "react";

export const App = () => {

  const [data, setData] = useState([{}])

  useEffect(() =>{
    fetch("http://localhost:5000/example").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  },[])

  return(

    <div>
      
    </div>
  )

}

export default App
