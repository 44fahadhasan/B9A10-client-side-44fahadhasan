import SectionContent from "../../shared/SectionContent/SectionContent";

import money from "../../../assets/images/23.gif";
import support from "../../../assets/images/e2.gif";
import gived from "../../../assets/images/eq2.gif";
import track from "../../../assets/images/swdr.gif";
import FeatureBox from "./FeatureBox/FeatureBox";
const WhyTerraCotta = () => {
  return (
    <div className="container w-[87%] mx-auto bg-accent-content">
      <section>
        <SectionContent
          leftTitle="Why"
          rightTitle="TerraCotta ?"
          content="TerraCotta products add warmth, character, and a touch of rustic charm to any space. Discover the beauty and durability of TerraCotta for your next project."
        />
      </section>

      <section className="mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <FeatureBox
          vehicle={track}
          title="Free Delivery Worldwide"
          content="We believe in making your shopping experience as convenient as possible.Shop with confidence and your favorite items taked right to your doorstep."
        />
        <FeatureBox
          vehicle={money}
          title="Money Back Gaurantee"
          content="If for any reason you're not completely satisfied with your purchase, we offer a money-back guarantee.We'll provide a full amount refund, no questions asked. "
        />
        <FeatureBox
          vehicle={gived}
          title="Gift Voucher"
          content="Our vouchers allow your loved ones to choose their favorite TerraCotta products.Treat someone special today with a TerraCotta gift voucher."
        />
        <FeatureBox
          vehicle={support}
          title="24/7 Online Support"
          content=" Our dedicated support team is available around the clock to help you with any questions or concerns you may have.Email or phone for support whenever you need it."
        />
      </section>
    </div>
  );
};

export default WhyTerraCotta;
