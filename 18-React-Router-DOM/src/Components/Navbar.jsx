import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex justify-between p-6 text-2xl font-bold text-amber-100 bg-cyan-900">
     <h3>Navbar</h3>
     <div className="flex gap-6 pr-2 underline underline-offset-2">
        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
     </div>
    </div>
  )
}

export default Navbar