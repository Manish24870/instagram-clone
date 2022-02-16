import Post from "./Post/Post"
import classes from "./Posts.module.css"

const Posts = () => {
  return (
    <div className={classes.posts}>
      <Post />
      <Post />
    </div>
  )
}

export default Posts
