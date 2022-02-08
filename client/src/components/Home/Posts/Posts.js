import classes from "./Posts.module.css"

const Posts = () => {
  return (
    <div className={classes.posts}>
      <div className={classes.post}>
        <div className={classes.testbg}></div>
        <div>text</div>
      </div>

      <div className={classes.post}>
        <div className={classes.testbg}></div>
        <div>text</div>
      </div>

      <div className={classes.post}>
        <div className={classes.testbg}></div>
        <div>text</div>
      </div>

      <div className={classes.post}>
        <div className={classes.testbg}></div>
        <div>text</div>
      </div>
    </div>
  )
}

export default Posts
