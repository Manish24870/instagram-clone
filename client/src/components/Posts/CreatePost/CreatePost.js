import classes from "./CreatePost.module.css"
import TopBar from "./TopBar/TopBar"
import UploadImage from "./UploadImage/UploadImage"
import WriteDescription from "./WriteDescription/WriteDescription"
import LivePreview from "./LivePreview/LivePreview"

const CreatePost = () => {
  return (
    <section className={classes["create-post"]}>
      <TopBar />
      <div className={classes["main-content"]}>
        <div>
          <UploadImage />
          <WriteDescription />
        </div>
        <div>
          <LivePreview />
        </div>
      </div>
    </section>
  )
}

export default CreatePost
