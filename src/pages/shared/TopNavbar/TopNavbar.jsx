import animateMail from "../../../assets/images/animate-envelope-mail-send-outline.gif";
import animatePhone from "../../../assets/images/animateCall.gif";

const TopNavbar = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="100"
      className="hidden lg:block py-1 bg-primary"
    >
      <div className="poppins text-accent-content lg:grid  grid-cols-3 items-center w-[95%] mx-auto">
        <div className="flex gap-1 items-center text-[15px] ">
          <div className="w-[20px]">
            <img src={animatePhone} alt="phone" />
          </div>
          <p>9033697984</p>
        </div>
        <div>
          <p className="text-[15px] text-center">
            FREE SHIPPING ON ORDERS ABOVE $275+
          </p>
        </div>
        <div className="flex gap-1 items-center  text-[15px] justify-self-end">
          <div className="w-[35px]">
            <img src={animateMail} alt="mail" />
          </div>
          <p>info@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default TopNavbar;
