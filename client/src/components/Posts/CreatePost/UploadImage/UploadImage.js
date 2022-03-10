import { useEffect, useState, useRef } from "react"
import { useDropzone } from "react-dropzone"

import classes from "./UploadImage.module.css"

import { DropImageIcon } from "../../../../assets/svg/Svg-icons"

const UploadImage = ({ getFiles }) => {
  // const [files, setFiles] = useState()
  const [isDropzoneEnter, setIsDropzoneEnter] = useState(false)

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      getFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  // const dropRef = useRef(null)

  // useEffect(() => {
  //   dropRef.current.addEventListener("dragenter", (e) => {
  //     setIsHoveredOverDropzone(true)
  //     console.log("drag entered")
  //   })

  //   dropRef.current.addEventListener("dragleave", (e) => {
  //     console.log("drag left")
  //     setIsHoveredOverDropzone(false)
  //   })

  //   // return () => {
  //   //   dropRef.current.removeEventListener()
  //   // }
  // }, [isHoveredOverDropzone])

  return (
    <div
      className={`${classes["upload-image"]} ${
        isDropzoneEnter ? classes["over-dropzone"] : ""
      }`}
      onDragOver={() => {
        setIsDropzoneEnter(true)
      }}
      onDragLeave={() => {
        setIsDropzoneEnter(false)
      }}
    >
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

      {/* {files && files.map((file) => <img src={file.preview} alt={file.name} />)} */}
    </div>
  )
}

export default UploadImage
