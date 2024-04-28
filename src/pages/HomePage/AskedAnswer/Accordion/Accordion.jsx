import PropTypes from "prop-types";

const Accordion = ({ title, content, checked }) => {
  return (
    <div className="collapse collapse-plus bg-accent-content border border-[#EEEEEE] text-lg dmsans font-medium text-primary-content">
      <input type="radio" name="my-accordion-3" defaultChecked={checked} />
      <div className="collapse-title">
        <h3 className="text-lg dmsans font-medium text-primary-content">
          {title}
        </h3>
      </div>
      <div className="collapse-content">
        <p className="poppins text-sm text-secondary-content">{content}</p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  checked: PropTypes.bool,
};

export default Accordion;
