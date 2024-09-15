import PropTypes from "prop-types";

const IconButton = ({ Icon, small, white }) => {
  return (
    <button
      className={`w-20 h-20 rounded-full bg-secondary flex justify-center items-center transition duration-200 hover:bg-secondaryDark ${
        small ? "w-10 h-10" : ""
      } ${white ? "bg-white" : ""}`}
    >
      <Icon className={`text-title text-4xl ${small ? "text-xl" : ""}`} />
    </button>
  );
};

IconButton.propTypes = {
  Icon: PropTypes.elementType,
  small: PropTypes.bool,
  white: PropTypes.bool,
};

export default IconButton;
