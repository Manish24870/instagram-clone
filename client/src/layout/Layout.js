// Styles
import classes from "./Layout.module.css"

// Components
import Header from "./Header/Header"
import SideBar from "./SideBar/SideBar"

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />

      <section className={classes.content}>
        <SideBar />
        <main className={classes.main}>{children}</main>
      </section>
    </div>
  )
}

export default Layout
