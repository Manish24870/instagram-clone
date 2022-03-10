import { useState } from "react"

import classes from "./CreatePost.module.css"
import TopBar from "./TopBar/TopBar"

import UploadImage from "./UploadImage/UploadImage"
import WriteDescription from "./WriteDescription/WriteDescription"
import LivePreview from "./LivePreview/LivePreview"
import CropImage from "./CropImage/CropImage"

const CreatePost = () => {
  const [file, setFile] = useState()

  const fileHandler = (files) => {
    console.log("createPost", files)
    setFile(files[0])
  }

  return (
    <section className={classes["create-post"]}>
      <TopBar />
      <div className={classes["main-content"]}>
        <div className={classes["input-area"]}>
          {!file && <UploadImage getFiles={fileHandler} />}
          {file && <CropImage image={URL.createObjectURL(file)} />}
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
