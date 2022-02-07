// Styles
import classes from "./SideBar.module.css"

// Components
import Navigation from "../../components/Navigation/Navigation"
import UserInformation from "./UserInformation/UserInformation"
import Footnote from "./Footnote/Footnote"

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <nav>
        <Navigation />
      </nav>

      <div className={classes.info}>
        <UserInformation />
        <Footnote />
      </div>
    </div>
  )
}

export default SideBar
