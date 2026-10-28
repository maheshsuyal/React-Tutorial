import React from 'react'

const App = () => {

const arr = {
  user:'ravi kishan',
  age:'-1',
  creature:'bhojpuriya',
  work:'chatu'
}

localStorage.setItem("actor",JSON.stringify(arr))
const mor = localStorage.getItem('actor')
console.log(JSON.parse(mor))
  return (
    <div>App</div>
  )
}

export default App