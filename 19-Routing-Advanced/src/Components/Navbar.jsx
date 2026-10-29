import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex justify-between w-full bg-blue-900  text-amber-100 items-center p-6 font-medium text-xl">
        <h2 className=" font-extrabold ">DharamRaj</h2>

        <div className="flex underline gap-10 pr-6">
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/product'>Product</Link>
           <Link to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar