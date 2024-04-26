import PropTypes from "prop-types";

const Button = ({ text, bg, hoverBg, textColor, hoverTextColor }) => {
  return (
    <span
      className={`poppins text-sm  px-5 py-2.5 ${textColor ?? "text-accent"} ${
        hoverTextColor ?? "hover:text-accent-content"
      } ${bg ?? "bg-secondary"} ${
        hoverBg ?? "hover:bg-primary"
      } rounded-[30px] transition-all duration-500`}
    >
      {text ?? "SHOP NOW"}
    </span>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hoverTextColor: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  hoverBg: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Button;
