import classes from "./Input.module.css"

const Input = ({ inputConfig }) => {
  return (
    <div className={classes["input--element"]}>
      <input {...inputConfig} />
    </div>
  )
}

export default Input
