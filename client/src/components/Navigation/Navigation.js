import classes from "./Navigation.module.css"

import NavItem from "./NavItem"

import { HomeIcon } from "../../assets/Svg-icons"

const Navigation = () => {
  return (
    <ul className={classes.navigation}>
      <NavItem icon={<HomeIcon />} title="Home" path="/" />
    </ul>
  )
}

export default Navigation
