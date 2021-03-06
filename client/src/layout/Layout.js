import { Outlet } from "react-router-dom"

// Styles
import classes from "./Layout.module.css"

// Components
import Header from "./Header/Header"
import SideBar from "./SideBar/SideBar"

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />

      <section className={classes["main-section"]}>
        <SideBar />
        {/* Outlet works as "children" prop */}
        <main className={classes.main}>{<Outlet />}</main>
      </section>
    </div>
  )
}

export default Layout
