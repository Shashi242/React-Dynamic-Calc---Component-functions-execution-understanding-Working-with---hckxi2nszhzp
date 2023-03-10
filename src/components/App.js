import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  return (
    <div id="main">
      <input id='input1' onChange={(e) => {setValue1(e.target.value)}}/>
       +
      <input id='input2' onChange={(e) => {setValue2(e.target.value)}}/> 
      
      <p id='result'>{value1+value2}</p>
    </div>
  )
}


export default App;
