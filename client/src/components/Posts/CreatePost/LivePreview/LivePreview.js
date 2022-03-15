import classes from "./LivePreview.module.css"

const LivePreview = async ({ image }) => {
  return (
    <div className={classes["live-preview"]}>
      <img src={image} />
    </div>
  )
}

export default LivePreview
