import AskedAnswer from "./AskedAnswer/AskedAnswer";
import Sliders from "./BannarSlider/Sliders/Sliders";

const HomePage = () => {
  return (
    <div>
      {/* slider */}
      <section className="overflow-hidden block">
        <Sliders />
      </section>
      {/* FAQ */}
      <section className="py-[70px]">
        <AskedAnswer />
      </section>
    </div>
  );
};

export default HomePage;
