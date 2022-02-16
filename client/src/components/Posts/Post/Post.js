import classes from "./Post.module.css"

import userImage from "../../../assets/Images/post-user-profile-1.png"
import PostImage from "../../../assets/Images/home-post-4.png"

import {
  MenuIcon,
  LikeIcon,
  CommentIcon,
  SendIcon,
  BookmarkIcon,
} from "../../../assets/svg/Svg-icons"

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
      <div className={classes.desc}>
        <div className={classes.interactions}>
          <div className={classes.left}>
            <LikeIcon />
            <CommentIcon />
            <SendIcon />
          </div>
          <div className={classes.right}>
            <BookmarkIcon />
          </div>
        </div>

        <p className={classes["like-count"]}>25,666 Likes</p>

        <div className={classes["user-desc"]}>
          <div className={classes["username"]}>morganstanley__</div>
          <div>newest paint in my nike af1s. say 😍 if you like it.</div>
        </div>

        {/**
         * TODO
         * Comment Section
         */}
      </div>
    </div>
  )
}

export default Post
