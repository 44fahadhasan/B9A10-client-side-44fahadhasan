import { Link } from "react-router-dom";
import faqImg from "../../../assets/images/faqs-image.png";
import SectionContent from "../../shared/SectionContent/SectionContent";
import Accordion from "./Accordion/Accordion";

const AskedAnswer = () => {
  return (
    <div className="container w-[87%] mx-auto bg-accent-content">
      <section>
        <SectionContent
          leftTitle="FAQ'"
          rightTitle="s"
          content="We've got answers! Check out our FAQ section for quick solutions to common queries about our products and services."
        />
      </section>

      <section className="mt-12 flex flex-col md:flex-row gap-9 items-center">
        <div className="basis-[65%] space-y-5">
          <Accordion
            checked={true}
            title="What is terracotta?"
            content='Terracotta, meaning "baked earth" in Italian, is a type of clay-based ceramic known for its natural reddish-brown color and durability.'
          />
          <Accordion
            title="How are terracotta products made?"
            content="Terracotta products are made by shaping natural clay, then firing it in a kiln at high temperatures. This process hardens the clay, creating sturdy and long-lasting items."
          />
          <Accordion
            title="Are terracotta products eco-friendly?"
            content="Yes, terracotta is eco-friendly as it's made from natural materials and is biodegradable. It's also energy-efficient, offering thermal insulation in buildings."
          />
          <Accordion
            title="How do I care for terracotta items?"
            content="Terracotta products should be handled with care to avoid breakage. They can be cleaned with mild soap and water and should be stored in a dry place to prevent moisture damage."
          />
          <Accordion
            title="Can terracotta be used outdoors?"
            content="Yes, terracotta is suitable for outdoor use. However, it may need to be sealed to protect it from the elements and prevent weathering over time."
          />
        </div>
        <div className="basis-[35%]">
          <div className="flex justify-center items-center group relative overflow-hidden  rounded-xl h-[360px] md:h-[480px] ">
            <img
              src={faqImg}
              alt="coffe img"
              className="inset-0 h-full w-full object-cover object-center transition-all duration-[3000ms] group-hover:scale-110"
            />
            <span className="absolute bottom-6 left-7  text-sm uppercase poppins underline text-primary-content  transition-all font-medium duration-300 hover:text-primary">
              <Link to="">Shop Now</Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AskedAnswer;
