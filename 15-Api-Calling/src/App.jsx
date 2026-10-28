import axios from "axios"
import { useState } from "react"
const App = () => {
const [data, setData] = useState([])
async function  getData(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(response.data)
    setData(response.data)

  }
  return (
    <div>
      <button onClick={getData}>Click</button>
      <div>
        {data.map((elem,idx)=>{
          return <h2>Hello,{elem.name},{idx+1}</h2>
        })}
      </div>
    </div>
  )
}

export default App