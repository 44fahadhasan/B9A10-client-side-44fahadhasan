import FooterBottom from "./FooterBottom/FooterBottom";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
import FooterTop from "./FooterTop/FooterTop";

const Footer = () => {
  return (
    <section className="poppins bg-base-300">
      <div className="container w-[87%] mx-auto divide-y divide-[#7b7e8642] text-primary">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </section>
  );
};

export default Footer;
