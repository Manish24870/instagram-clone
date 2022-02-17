import classes from "./Post.module.css"

import {
  MenuIcon,
  LikeIcon,
  CommentIcon,
  SendIcon,
  BookmarkIcon,
} from "../../../assets/svg/Svg-icons"

const Post = ({ image, description, profilePic, handle }) => {
  return (
    <div className={classes.post}>
      <div className={classes.header}>
        <div className={classes["user-info"]}>
          <img src={profilePic} alt="user" />
          <p>{handle}</p>
        </div>
        <i>
          <MenuIcon />
        </i>
      </div>
      <div className={classes.image}>
        <img src={image} alt="user" />
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
          <div className={classes["username"]}>{handle}</div>
          <div>{description}</div>
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
