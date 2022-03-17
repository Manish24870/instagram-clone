import { useState } from "react"

import classes from "./CreatePost.module.css"
import TopBar from "./TopBar/TopBar"

import UploadImage from "./UploadImage/UploadImage"
import WriteDescription from "./WriteDescription/WriteDescription"
import CropImage from "./CropImage/CropImage"

import Preview from "./Preview/Preview"

const CreatePost = () => {
  // Image file --> image is saved as File object
  const [file, setFile] = useState(null)

  // Cropped area data --> x, y, aspect ratio, zoom level etc
  const [cropData, setCropData] = useState(null)

  // Set crop data state after getting the data from the CropImage component
  const setCropDataHandler = (data) => {
    setCropData(data)
  }

  // Set image state
  const fileHandler = (files) => {
    setFile(files[0])
  }

  // If user wants to add new image after image is cropped
  const addNewImageAfterCropHandler = () => {
    setFile(null)
    setCropData(null)
  }

  /**
   * Check if:
   *  - image is yet to be uploaded
   *  - image is already uploaded
   *  - image is already cropped and new image is to be uploaded
   */
  let uploadImageArea = <UploadImage getFiles={fileHandler} />

  if (file) {
    uploadImageArea = (
      <CropImage
        image={URL.createObjectURL(file)}
        getCropData={setCropDataHandler}
      />
    )
  }

  if (cropData) {
    uploadImageArea = (
      <p
        onClick={addNewImageAfterCropHandler}
        className={classes["add-new-image"]}
      >
        Click here to add new image
      </p>
    )
  }

  return (
    <section className={classes["create-post"]}>
      <TopBar />
      <div className={classes["main-content"]}>
        {/* Upload Image, Crop Image depending on if image is uploaded or not */}
        <div className={classes["input-area"]}>
          {/* UploadImage / CropImage */}
          {uploadImageArea}

          {/* Description, Location form */}
          <WriteDescription />
        </div>

        {/* Preview of the post */}
        <div className={classes.preview}>
          <Preview
            postImage={
              // check if the image is uploaded yet
              file ? URL.createObjectURL(file) : null
            }
          />
        </div>
      </div>
    </section>
  )
}

export default CreatePost
