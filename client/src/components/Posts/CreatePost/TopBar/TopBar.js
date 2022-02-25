import { CloseIcon } from "../../../../assets/svg/Svg-icons"
import classes from "./Topbar.module.css"

const TopBar = () => {
  return (
    <div className={classes.topbar}>
      <p className={classes.heading}>Create a new post.</p>
      <i>
        <CloseIcon />
      </i>
    </div>
  )
}

export default TopBar
