import { useState } from "react"

import classes from "./WriteDescription.module.css"

const WriteDescription = () => {
  const [wordCount, setWordCount] = useState(0)

  return (
    <div className={classes.desc}>
      <form>
        <div className={classes.caption}>
          <textarea
            id="txtarea"
            placeholder="Write a caption..."
            maxLength="200"
            onChange={() => setWordCount((wordCount) => wordCount + 1)}
          />
          <label for="txtarea" className={classes.captionLabel}>
            <span>{wordCount}</span>/200
          </label>
        </div>
      </form>
    </div>
  )
}

export default WriteDescription
