import classes from "./UserInformation.module.css"

import pic from "../../../assets/Images/profile.png"

const UserInformation = () => {
  return (
    <div className={classes["user-info"]}>
      <div className={classes.image}>
        <img src={pic} alt="profile" />
      </div>
      <p>
        <span className={classes.handle}>manish_._</span>
        <span className={classes.username}>Manish Acharya</span>
      </p>
    </div>
  )
}

export default UserInformation