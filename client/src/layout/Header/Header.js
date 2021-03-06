import { useState } from "react"

// Styles
import classes from "./Header.module.css"

// Assets
import { Logo, NotificationIcon, UploadIcon } from "../../assets/svg/Svg-icons"
import { SeachIcon } from "../../assets/svg/Svg-icons"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false)

  console.log(isSearchClicked)

  return (
    <header className={classes.header}>
      <div className={classes.section}>
        <Logo />

        <div className={classes.search}>
          <i className={isSearchClicked ? classes.hideIcon : ""}>
            <SeachIcon />
          </i>
          <input
            placeholder="Search"
            onFocus={() => setIsSearchClicked(true)}
            onBlur={() => setIsSearchClicked(false)}
          />
        </div>
      </div>
      <div className={classes.section + " " + classes.icons}>
        <NavLink to="/create-new-post">
          <UploadIcon />
        </NavLink>
        <NotificationIcon />
      </div>
    </header>
  )
}

export default Header
