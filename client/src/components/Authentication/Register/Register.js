/**
 * Imports
 */
// React
import { useState, useEffect, useRef } from "react"

// Icons
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * Regular Expressions
 */
/** Username
 *  Must start with lower or uppercase letter
 *  Can be lower/upper class letter, digits, "-" or "_"
 *  Can be anywhere between 3 to 23 characters
 */
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/

/** Password
 *  At least
 *  - one lower case letter
 *  - one upper case letter
 *  - one digit
 *  - one special character
 *  Can be anywhere between 8 to 24 characters
 */
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

/** Email
 *  Format --> (1.Name)@(2.domain).(3.extention)(.4.optional extention) --> raju@somecollege.edu.np
 *  1.Letters, numbers, dots & hypens ; any length
 *  2.Letters, numbers & hypens ; any length
 *  3.Letters ; 2 to 8 character long
 *  4.Letters ; 2 to 8 character long --> optional extention
 */
const EMAIL_REGEX = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

/**
 * Component
 */
const Register = () => {
  // References
  const userRef = useRef()
  const errRef = useRef()

  // State
  const [userName, setUserName] = useState("")
  const [validUserName, setValidUserName] = useState(false)
  const [userNameFocus, setUserNameFocus] = useState(false)

  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const [confirmPassword, setConfirmPassword] = useState("")
  const [validConfirmPassword, setValidConfirmPassword] = useState(false)
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false)

  return <div>Register</div>
}

export default Register
