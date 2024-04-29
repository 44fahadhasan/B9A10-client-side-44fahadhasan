import AskedAnswer from "./AskedAnswer/AskedAnswer";
import Sliders from "./BannarSlider/Sliders/Sliders";
import CraftItems from "./CraftItems/CraftItems";
import WhyTerraCotta from "./WhyTerraCotta/WhyTerraCotta";

const HomePage = () => {
  return (
    <div>
      {/* slider section*/}
      <section className="overflow-hidden block">
        <Sliders />
      </section>

      {/* why terracota section  */}
      <section className="py-[70px]">
        <WhyTerraCotta />
      </section>

      {/* craft items section  */}
      <section className="py-[70px]">
        <CraftItems />
      </section>

      {/* FAQ section*/}
      <section className="py-[70px]">
        <AskedAnswer />
      </section>
    </div>
  );
};

export default HomePage;
