import PropTypes from "prop-types";

const FeatureBox = ({ vehicle, title, content }) => {
  return (
    <div className="p-5 bg-accent-content rounded-2xl  drop-shadow-[0px_3px_15px_rgba(0,0,0,0.07)] ">
      <div className="w-[69px]">
        <img src={vehicle} alt="image" />
      </div>
      <div className="mt-2">
        <h3 className="text-lg dmsans font-medium text-primary-content">
          {title}
        </h3>
      </div>
      <div className="mt-1">
        <p className="poppins text-sm text-secondary-content">{content}</p>
      </div>
    </div>
  );
};

FeatureBox.propTypes = {
  vehicle: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default FeatureBox;
