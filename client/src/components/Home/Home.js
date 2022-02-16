// Styles
import classes from "./Home.module.css"

// Components
import Posts from "../Posts/Posts"
import Suggestions from "../Suggestions/Suggestions"

const Home = () => {
  return (
    <div className={classes.home}>
      <Posts />
      <Suggestions />
    </div>
  )
}

export default Home
