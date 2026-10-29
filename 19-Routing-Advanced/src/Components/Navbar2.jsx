import { useNavigate } from "react-router-dom"


const Navbar2 = () => {

  let navigate =   useNavigate()
  return (
    <div className='flex w-full bg-blue-400 p-3 gap-4'>
        <button onClick={()=>{
            navigate('/')
        }} className=' bg-green-900 rounded px-4 py-2 font-medium  active:scale-95 cursor-pointer'>Return to Home Page</button>
        <button onClick={()=>{
            navigate(-1)
        }} className=' bg-green-900 rounded px-4 py-2 font-medium active:scale-95 cursor-pointer'>Back</button>
        <button onClick={()=>{
            navigate(+1)
        }} className=' bg-green-900 rounded px-4 py-2 font-medium active:scale-95 cursor-pointer'>Next</button>
    </div>
  )
}

export default Navbar2