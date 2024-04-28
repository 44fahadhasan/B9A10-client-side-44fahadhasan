import PropTypes from "prop-types";
const SectionContent = ({ leftTitle, rightTitle, content }) => {
  return (
    <div className="text-center space-y-3">
      <h2 className="dmsans text-2xl sm:text-4xl font-bold text-primary-content">
        {leftTitle} <span className="text-primary">{rightTitle}</span>
      </h2>
      <p className="poppins text-[15px] text-secondary-content font-light mx-auto w-[85%] sm:w-[70%] lg:w-[60%] xl:w-[50%]">
        {content}
      </p>
    </div>
  );
};

SectionContent.propTypes = {
  leftTitle: PropTypes.string.isRequired,
  rightTitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SectionContent;
