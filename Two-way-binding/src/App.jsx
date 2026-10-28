
import {useState} from 'react'
const App = () => {


  const [name, setName] = useState('')

  const submitClick = (elem)=>{
    elem.preventDefault()
    console.log('Form submitted by ',name)
    setName('')
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        submitClick(elem)
      }}>
        <input type="text" placeholder="Enter your name" value={name} onChange={(elem)=>{
             setName(elem.target.value)
        }}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App