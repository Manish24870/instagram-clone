import classes from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>This is the header</header>

      <main className={classes.main}>This is the main component</main>
    </div>
  )
}

export default Layout
