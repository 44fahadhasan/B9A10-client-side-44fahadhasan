import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionContent from "../shared/SectionContent/SectionContent";

const AllArtAndCraftItemsPage = () => {
  const [addCraftItems, setAddCraftItems] = useState([]);
  useEffect(() => {
    fetch("https://b9a10-server-side-44fahadhasan.vercel.app/add-craft-item")
      .then((res) => res.json())
      .then((data) => setAddCraftItems(data));
  }, []);

  return (
    <section className="py-[70px] container w-[87%] mx-auto p">
      <div className="text-center mb-10">
        <SectionContent
          leftTitle="Available All Items Of"
          rightTitle="User"
          content="You will see all the art & craft items all the users have added to the database."
        />
      </div>

      {/* table start */}
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full  overflow-hidden bg-base-100 shadow-dashboard px-8 py-4  rounded-md border shadow-md">
          <table className="min-w-full">
            <thead className="dmsans">
              <tr>
                <th className="px-6 py-3 border-b border-secondary-content text-left leading-4 text-primary-content tracking-wider">
                  Serial
                </th>
                <th className="px-6 py-3 border-b border-secondary-content text-left text-sm leading-4 text-primary-content tracking-wider">
                  Craft Name
                </th>
                <th className="px-6 py-3 border-b border-secondary-content text-left text-sm leading-4 text-primary-content tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 border-b border-secondary-content text-left text-sm leading-4 text-primary-content tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 border-b border-secondary-content text-left text-sm leading-4 text-primary-content tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 border-b border-secondary-content text-left text-sm leading-4 text-primary-content tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 border-b border-secondary-content"></th>
              </tr>
            </thead>

            <tbody className="bg-base-100 poppins text-secondary-content">
              {addCraftItems.map((craftData, idx) => (
                <tr key={craftData._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-[#ccc]">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm leading-5 text-accent">
                          {idx + 1}.
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-[#ccc]">
                    <div className="text-sm leading-5 ">
                      {craftData.craftName.slice(0, 16)}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b  border-[#ccc] text-sm leading-5">
                    {craftData.email}
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b  border-[#ccc] text-sm leading-5">
                    {craftData.craftName.slice(0, 14)}
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b  border-[#ccc] text-sm leading-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-accent leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-base-300 opacity-50 rounded-full"
                      ></span>
                      <span className="relative text-xs">
                        {craftData.stockStatus}
                      </span>
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-[#ccc]  text-sm leading-5">
                    {craftData.price} $
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-[#ccc] text-sm leading-5">
                    <Link
                      to={`/View-Details/add-craft-item/${craftData?._id}`}
                      className="px-5 py-2 border-primary border text-accent rounded transition duration-300 hover:bg-primary hover:text-accent-content focus:outline-none text-center inline-block"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* table end */}
    </section>
  );
};

export default AllArtAndCraftItemsPage;
