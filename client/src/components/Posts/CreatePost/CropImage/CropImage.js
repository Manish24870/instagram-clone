import { useState, useCallback, useEffect } from "react"

import classes from "./CropImage.module.css"
import Cropper from "react-easy-crop"

import getCroppedImg from "./CreateCrop"

const CropImage = ({ image, getCroppedImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  useEffect(() => {
    if (croppedImage) getCroppedImage(croppedImage)
  }, [croppedImage, getCroppedImage])

  const getImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels)

      console.log("Crop image", croppedImage)

      setCroppedImage(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, image])

  return (
    <div className={classes.container}>
      <div className={classes["crop-container"]}>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          classes={{
            containerClassName: `${classes.crop}`,
            cropAreaClassName: `${classes["crop-area"]}`,
            mediaClassName: `${classes[" -area"]}`,
          }}
        />
      </div>

      <div className={classes["crop-controls"]}>
        <button className={classes.testbtn} onClick={getImage}>
          Get image
        </button>
      </div>
    </div>
  )
}

export default CropImage
