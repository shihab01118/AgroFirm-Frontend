import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ primary, secondary, white, value }) => {
  return (
    <button
      className={`py-2 lg:py-4 px-5 lg:px-9 rounded-full flex items-center gap-2 transition-all duration-200 shadow-sm text-title ${
        primary ? "bg-primary hover:bg-primaryDark" : ""
      } ${secondary ? "bg-secondary hover:bg-secondaryDark" : ""} ${
        white ? "bg-white hover:bg-secondary" : ""
      }`}
    >
      <span className="font-medium">{value}</span>
      <FaArrowRight />
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  white: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default Button;
