import AskedAnswer from "./AskedAnswer/AskedAnswer";
import Sliders from "./BannarSlider/Sliders/Sliders";
import WhyTerraCotta from "./WhyTerraCotta/WhyTerraCotta";

const HomePage = () => {
  return (
    <div>
      {/* slider */}
      <section className="overflow-hidden block">
        <Sliders />
      </section>

      <section className="py-[70px]">
        <WhyTerraCotta />
      </section>

      {/* FAQ */}
      <section className="py-[70px]">
        <AskedAnswer />
      </section>
    </div>
  );
};

export default HomePage;
