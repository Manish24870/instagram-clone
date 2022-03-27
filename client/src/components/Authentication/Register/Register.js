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
 * Starts with lower or uppercase letter
 * Followed by anywhere between 3 to 23 characters consisting of lower/upper class letter, digits, "-" or "_"
 */
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/

/**
 * At least
 *  - one lower case letter
 *  - one upper case letter
 *  - one digit
 *  - one special character
 * Can be anywhere between 8 to 24 characters
 */
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = () => {
  return <div>Register</div>
}

export default Register
