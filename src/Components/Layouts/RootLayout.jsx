import Navbar from "../Navbar"
import TaskList from "../TaskList"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <section className="m-16">
      <Navbar/>
      <div className="my-20 flex justify-between">
        <TaskList/>
        <Outlet/>
      </div>
    </section>
  )
}

export default RootLayout
