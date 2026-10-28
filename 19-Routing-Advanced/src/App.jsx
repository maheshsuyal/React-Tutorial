import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import NotFound from "./Pages/NotFound"
import { Route,Routes } from "react-router-dom"
const App = () => {
  return (
    <div className="h-screen bg-black text-white">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App