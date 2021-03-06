import classes from "./NavItem.module.css"

import { NavLink } from "react-router-dom"

const NavItem = ({ icon, title, path }) => {
  return (
    <li className={classes["nav-item"]}>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive ? classes.active : ""
        }}
      >
        {icon}
        <p>{title}</p>
      </NavLink>
    </li>
  )
}

export default NavItem
