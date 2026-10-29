import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div>
        <div className=" flex justify-center gap-12 pt-8 font-bold text-2xl underline text-amber-50">
            <Link to='/product/men'>Men's</Link>
            <Link to='/product/women'>Women's</Link>
        </div>
        <Outlet />
        
    </div>
  )
}

export default Product