import PropTypes from "prop-types";

const IconButton = ({ Icon, small, white, disabled }) => {
  return (
    <button
      className={`w-20 h-20 rounded-full bg-secondary flex justify-center items-center transition duration-200 hover:bg-secondaryDark ${
        small ? "w-[40px] h-[40px]" : ""
      } ${white ? "bg-white" : ""} ${
        disabled ? "cursor-not-allowed bg-[#ddd] hover:bg-[#ddd]" : ""     }`}
      disabled={disabled}
    >
      <Icon className={`text-title text-4xl ${small ? "text-xl" : ""}`} />
    </button>
  );
};

IconButton.propTypes = {
  Icon: PropTypes.elementType,
  small: PropTypes.bool,
  white: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default IconButton;
