import { useState } from "react"
import { useDropzone } from "react-dropzone"

import classes from "./UploadImage.module.css"

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
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div>Upload</div>
      </div>

      {files && files.map((file) => <img src={file.preview} alt={file.name} />)}
    </div>
  )
}

export default UploadImage
