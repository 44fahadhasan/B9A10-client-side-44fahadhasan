import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button/Button";
const Slide = ({
  bgColor,
  textColor,
  content,
  title,
  smallTitle,
  order,
  slideImg,
}) => {
  return (
    <div className={`${bgColor} `}>
      <div className="container w-[87%] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* content */}
        <div className={`order-2 ${order} basis-1/2`}>
          <div className="text-center sm:w-[85%] mx-auto">
            <p
              className={`dmsans text-sm md:text-base lg:text-lg ${
                textColor ?? "text-secondary"
              } text-accent font-medium uppercase`}
            >
              {smallTitle}
            </p>
            <h1 className="dmsans text-2xl sm:text-3xl md:text-[44px] lg:text-[50px] xl:text-[60px] text-primary font-bold uppercase pt-1 md:pt-2 lg:pt-4 xl:pt-5">
              {title}
            </h1>
            <p className="poppins sm:pt-1 md:pt-2 lg:pt-4 xl:pt-5 hidden sm:block text-sm lg:text-base font-light text-primary">
              {content}
            </p>
          </div>
          {/* button */}
          <div className="flex justify-center pt-5 lg:pt-6 xl:pt-7 pb-14 sm:pb-0">
            <div className="sm:-mr-[35px] sm:z-10 sm:pt-[7px] sm:pb-[9px] sm:rounded-[30px]">
              <Link to="">
                <Button
                  text="SHOP NOW"
                  bg="bg-accent-content"
                  hoverBg="hover:bg-secondary"
                  textColor="text-primary"
                  hoverTextColor="hover:text-primary"
                />
              </Link>
            </div>
            <div
              className="hidden
          md:block bg-primary hover:bg-secondary transition-all duration-500 pl-[21px] pt-[7px] pb-[9px] rounded-[30px]"
            >
              <Link to="">
                <Button
                  text="READ MORE"
                  textColor="text-accent-content"
                  bg="bg-primary"
                  hoverBg="hover:bg-secondary"
                  hoverTextColor="hover:text-primary"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* img */}
        <div className={`order-1 ${order} basis-1/2`}>
          <div className="w-[70%] mx-auto h-[60vh] sm:h-screen flex items-center">
            <img
              src={slideImg}
              alt="slide img"
              className="object-contain w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  bgColor: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
  smallTitle: PropTypes.string,
  order: PropTypes.string,
  textColor: PropTypes.string,
  slideImg: PropTypes.any,
};
export default Slide;
