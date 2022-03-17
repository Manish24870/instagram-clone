/**
 *
 * @returns component --> a preview of the post
 * Image part --> takes in image and cropped coordinates and transforms the image
 */

import classes from "./Preview.module.css"

const Preview = ({ postImage }) => {
  // Check if postImage contains image
  let imageComponent = <p>No Image Yet!!!</p>

  if (postImage) {
    imageComponent = <img src={postImage} alt="preview post" />
  }

  return (
    <div className={classes.preview}>
      {/* Test image preview */}
      {imageComponent}
    </div>
  )
}

export default Preview
