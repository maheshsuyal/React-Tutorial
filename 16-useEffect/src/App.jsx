import { useEffect, useState } from "react"


const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging(){
    console.log('a ki value change hoo gayi')
  }
  function bChanging(){
    console.log('a ki value change hoo gayi')
  }


  useEffect(function(){
    aChanging()
  },[a])
  return (
    <div>

    <h3>value of A : {a}</h3>
    <h3>value of B : {b}</h3>
      
      <button onClick={()=>{
        setA(a+1)
      }}>change A</button>


       <button onClick={()=>{
        setB(b-1)
      }}>change B</button>
    </div>
  )
}

export default App