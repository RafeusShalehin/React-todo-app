import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { todoAction } from "./Store/ToDoStore"
import { useRef } from "react"

const Navbar = () => {

  
  return (
    <nav className="flex justify-between items-end">
      <NavLink to='/' className="text-[50px] font-bold">React Todo App</NavLink>
      <NavLink to='add' >Add</NavLink>
    </nav>
  )
}

export default Navbar
