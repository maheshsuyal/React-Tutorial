import React from 'react'
import Card from './components/Card'


const App = () => {
return (

<div className='parent'>
  <Card user = 'Tiger' age = {12} img = 'https://plus.unsplash.com/premium_photo-1693866630009-7cdd5cce7b46?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  <Card user = 'Disha' age = {113} img = 'https://plus.unsplash.com/premium_photo-1717325378055-08737e202cab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D'/>
  <Card user = 'Nora' age = {27} img = 'https://images.unsplash.com/photo-1752038944327-3970c77bd891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
  <Card user = 'Lola' age = {27} img = 'https://images.unsplash.com/photo-1768320663681-144e88c95185?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3NXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
</div>

)
}

export default App