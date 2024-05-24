import React ,{useState} from 'react'
import './Func.css'
const App = () => {
  const[name]=useState("saptha sagaaralu daati")
  let w1={
    color:'red',
    textAlign:'right',
  }
  return (
    <div>
      <h2 style={w1}>Rakshith shetty's {name}</h2>
      <h1>Surya s/o Krishnan</h1>
      <h4 style={{color:'orange',fontSize:'30px',}}>Dulquer salman</h4>
    </div>
  )
}



export default App
