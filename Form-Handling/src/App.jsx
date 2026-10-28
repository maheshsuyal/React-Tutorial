

const App = () => {

  const click = (elem)=>{
    elem.preventDefault()
    console.log("typing.....")
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        click(elem)
      }}>
        <input type="text" placeholder="Enter your name"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App