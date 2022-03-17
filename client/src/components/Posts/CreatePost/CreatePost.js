import { useCallback, useState } from "react"

import classes from "./CreatePost.module.css"
import TopBar from "./TopBar/TopBar"

import UploadImage from "./UploadImage/UploadImage"
import WriteDescription from "./WriteDescription/WriteDescription"
import LivePreview from "./LivePreview/LivePreview"
import CropImage from "./CropImage/CropImage"

const CreatePost = () => {
  const [file, setFile] = useState(null)

  console.log(file)

  // Image crop
  const [croppedImage, setCroppedImage] = useState(null)
  const [closeCrop, setCloseCrop] = useState(false)

  const fileHandler = (files) => {
    setFile(files[0])
  }

  const getImageHandler = (image) => {
    setCroppedImage(image)
    setCloseCrop(true)
  }

  let isCropShown

  if (!file && !croppedImage) {
    isCropShown = false
  } else {
    isCropShown = true
  }

  return (
    <section className={classes["create-post"]}>
      <TopBar />
      <div className={classes["main-content"]}>
        <div className={classes["input-area"]}>
          {!isCropShown && <UploadImage getFiles={fileHandler} />}
          {isCropShown && !closeCrop && (
            <CropImage
              image={URL.createObjectURL(file)}
              getCroppedImage={(img) => getImageHandler(img)}
            />
          )}
          {croppedImage && <img src={croppedImage} alt="cropped"npm  />}
          <WriteDescription />
        </div>
        {/* <div className={classes["live-preview"]}>
          {croppedImage && <LivePreview image={croppedImage} />}
        </div> */}
      </div>
    </section>
  )
}

export default CreatePost
