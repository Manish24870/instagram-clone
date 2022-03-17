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

  console.log(cropData)

  // Set crop data state after getting the data from the CropImage component
  const setCropDataHandler = (data) => {
    setCropData(data)
  }

  // Set image state
  const fileHandler = (files) => {
    setFile(files[0])
  }

  // Check if the image is uploaded yet / image is cropped --> to display the correct component
  let imageComponent = <UploadImage getFiles={fileHandler} />

  if (file) {
    imageComponent = (
      <CropImage
        image={URL.createObjectURL(file)}
        getCropData={setCropDataHandler}
      />
    )
  }

  return (
    <section className={classes["create-post"]}>
      <TopBar />
      <div className={classes["main-content"]}>
        {/* Upload Image, Crop Image depending on if image is uploaded or not */}
        <div className={classes["input-area"]}>
          {/* UploadImage / CropImage */}
          {imageComponent}

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
