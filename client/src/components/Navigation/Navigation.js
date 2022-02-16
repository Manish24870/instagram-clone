import classes from "./Navigation.module.css"

import NavItem from "./NavItem"

import {
  ExploreIcon,
  HomeIcon,
  MessageIcon,
  UserProfileIcon,
} from "../../assets/svg/Svg-icons"

const Navigation = () => {
  return (
    <ul className={classes.navigation}>
      <NavItem icon={<HomeIcon />} title="Home" path="/" />
      <NavItem
        icon={<MessageIcon />}
        title="Messages"
        path="/chat"
      />
      <NavItem
        icon={<ExploreIcon />}
        title="Explore"
        path="/explore"
      />
      <NavItem
        icon={<UserProfileIcon />}
        title="User Profile"
        path="/user"
      />
    </ul>
  )
}

export default Navigation
