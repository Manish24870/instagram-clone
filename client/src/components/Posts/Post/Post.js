import classes from "./Post.module.css"

import userImage from "../../../assets/Images/post-user-profile-3.png"
import PostImage from "../../../assets/Images/home-post-2.png"

import { MenuIcon } from "../../../assets/svg/Svg-icons"

const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.header}>
        <div className={classes["user-info"]}>
          <img src={userImage} alt="user" />
          <p>morganstanley__</p>
        </div>
        <i>
          <MenuIcon />
        </i>
      </div>
      <div className={classes.image}>
        <img src={PostImage} alt="user" />
      </div>
      <div className={classes.desc}>Desc</div>
    </div>
  )
}

export default Post
