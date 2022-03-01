import classes from "./Input.module.css"

const Input = ({ inputConfig, SVG }) => {
  return (
    <div className={classes["input--element"]}>
      <input {...inputConfig} />
      {SVG}
    </div>
  )
}

export default Input
