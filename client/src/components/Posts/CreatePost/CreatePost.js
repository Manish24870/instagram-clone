import { useState } from "react"

import classes from "./CreatePost.module.css"
import TopBar from "./TopBar/TopBar"

import UploadImage from "./UploadImage/UploadImage"
import WriteDescription from "./WriteDescription/WriteDescription"
const CreatePost = () => {
  // Image file --> image is saved as File object
  const [file, setFile] = useState(null)

  // Set image file to file state
  const fileHandler = (files) => {
    console.log(files, "CreatePost Component")

    setFile(files[0])
  }

  return (
    <main className={classes["create-post"]}>
      <TopBar />
      <div className={classes["main-content"]}>
        <div className={classes["input-area"]}>
          {/* UploadImage */}
          <UploadImage getFiles={fileHandler} />

          {/* Description, Location form */}
          <WriteDescription />
        </div>
      </div>
    </main>
  )
}

export default CreatePost
