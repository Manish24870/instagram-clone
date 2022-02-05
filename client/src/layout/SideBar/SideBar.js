// Styles
import classes from "./SideBar.module.css"

// Components
import Navigation from "../../components/Navigation/Navigation"

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <nav>
        <Navigation />
      </nav>
    </div>
  )
}

export default SideBar
