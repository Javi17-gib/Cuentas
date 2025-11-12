import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemComponents from './components/ItemComponents'
import Button from 'react-bootstrap/Button';


function App() {
 var x = 0 
 //REACT HOOKS
 let [contador, setContador] = useState(10)
 let [arr, setArr]=useState([])
 let clickboton = ()=>{
  setContador(++contador)
  console.log(contador)
  let x=[...arr, contador]
  setArr(x)
 }
  return (
    <>
      <h1>Contador</h1>
      <Button variant="primary">Dark</Button>
      <p>{contador}</p>
      <button onClick={clickboton}>Aumentar</button>
      { arr.map((item)=>(<ItemComponents key={item} />)) }
    </>
  )
}

export default App
