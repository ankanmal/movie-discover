import { Link } from "@tanstack/react-router"


const Navbar = () => {
  return (
    
    <div className="flex flex-row bg-gray-500">

        <div className=" bg-amber-300 px-4 mx-2">
            
            <Link to="/">LogoComponent</Link>
            </div>
        <div className=" bg-amber-300 px-4 mx-2 grow">
            <Link to="/">SearchBarComp</Link>
            </div>
        <div className=" bg-amber-300 px-4 mx-2">

            <Link to="/user">ProfilePagecomp</Link>
        </div>

    </div>
  
    
  )
}

export default Navbar