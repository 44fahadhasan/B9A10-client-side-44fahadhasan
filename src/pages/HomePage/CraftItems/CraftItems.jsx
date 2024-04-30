import { useEffect, useState } from "react";
import ProductCard from "../../shared/ProductCard/ProductCard";
import SectionContent from "../../shared/SectionContent/SectionContent";

const CraftItems = () => {
  const [craftItems, setCraftItems] = useState([]);
  useEffect(() => {
    fetch("https://b9a10-server-side-44fahadhasan.vercel.app/craft-items")
      .then((res) => res.json())
      .then((data) => setCraftItems(data));
  }, []);

  return (
    <section className="container w-[87%] mx-auto bg-accent-content">
      <section>
        <SectionContent
          leftTitle="Craft"
          rightTitle="Items"
          content=" Elevate your home decor or architectural project with our limited-edition designs and one-of-a-kind creations that you won't find anywhere else."
        />
      </section>

      <section className="mt-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* product card */}
          {craftItems.map((craftItem) => (
            <ProductCard key={craftItem._id} craftItem={craftItem} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default CraftItems;
