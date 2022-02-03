// Styles
import classes from "./Layout.module.css"

// Components
import Header from "./Header/Header"

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />

      <main className={classes.main}>{children}</main>
    </div>
  )
}

export default Layout
