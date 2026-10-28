import "./App.css";
const App = () => {
  const data = (elem)=>{
      console.log(elem)
    }
  return (
    <div className="paren">
        <button onClick={(elem)=>{
          data(elem)
        }}>Click</button>
    </div>
  )
}

export default App