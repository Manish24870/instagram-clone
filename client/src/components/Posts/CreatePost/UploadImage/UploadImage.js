import { useState } from "react"
import { useDropzone } from "react-dropzone"

import classes from "./UploadImage.module.css"

import { DropImageIcon } from "../../../../assets/svg/Svg-icons"

const UploadImage = () => {
  const [files, setFiles] = useState()

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  return (
    <div className={classes["upload-image"]}>
      <div {...getRootProps()} className={classes["upload-area"]}>
        <input {...getInputProps()} />
        <div>
          <DropImageIcon />
          <h3 className={classes.heading}>Drag and drop your images here</h3>
          <p className={classes["text"]}>
            or <span>browse</span> from your computer
          </p>
        </div>
      </div>

      {files && files.map((file) => <img src={file.preview} alt={file.name} />)}
    </div>
  )
}

export default UploadImage
