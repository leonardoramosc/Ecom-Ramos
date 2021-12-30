import { Spinner } from "react-bootstrap";
import './custom-spinner.css'

const CustomSpinner = () => {
  return (
    <span className="custom-spinner__wrapper">
      <Spinner animation="border" className="custom-spinner"/>
    </span>
  )
}

export default CustomSpinner;