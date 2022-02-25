import classes from "./CreatePost.module.css"
import TopBar from "./TopBar/TopBar"

const CreatePost = () => {
  return (
    <section className={classes["create-post"]}>
      <TopBar />
    </section>
  )
}

export default CreatePost
