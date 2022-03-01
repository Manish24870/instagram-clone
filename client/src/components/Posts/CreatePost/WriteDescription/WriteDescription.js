import { useState } from "react"
import Input from "./Input/Input"

import classes from "./WriteDescription.module.css"

import { DownIcon, LocationIcon } from "../../../../assets/svg/Svg-icons"

const WriteDescription = () => {
  const [wordCount, setWordCount] = useState(0)

  return (
    // TODO The word counter does not work as intended.

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

        <Input
          inputConfig={{ type: "text", placeholder: "Add Location" }}
          SVG={<LocationIcon />}
        />
        <Input
          inputConfig={{ type: "text", placeholder: "Accessibility Options" }}
          svg={<DownIcon />}
        />

        <button className={classes.btn + " " + classes["btn-primary"]}>
          Post
        </button>
      </form>
    </div>
  )
}

export default WriteDescription
