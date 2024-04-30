import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SectionContent from "../shared/SectionContent/SectionContent";

const MyArtAndCraftListPage = () => {
  const [cruntUserCraftItem, setCruntUserCraftItem] = useState([]);

  const {
    user: { email: cruntLoginUserEmail },
  } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5003/add-craft-item")
      .then((res) => res.json())
      .then((data) => {
        const cruntUserEmail = data.filter(
          (value) => value.email === cruntLoginUserEmail
        );
        setCruntUserCraftItem(cruntUserEmail);
      });
  }, [cruntLoginUserEmail]);

  // handleRemove
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5003/add-craft-item/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <section className="container w-[87%] mx-auto bg-accent-content  py-[70px]">
      <section>
        <SectionContent
          leftTitle="Craft"
          rightTitle="Items"
          content=" Elevate your home decor or architectural project with our limited-edition designs and one-of-a-kind creations that you won't find anywhere else."
        />
      </section>

      <section className="mt-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cruntUserCraftItem.map((craftItem) => (
            <div
              key={craftItem._id}
              className="dmsans relative w-full  border border-[#F2F0EF]  overflow-hidden rounded-lg bg-accent-content"
            >
              <div className="group relative overflow-hidden">
                <img
                  src={craftItem?.imageurl}
                  alt={craftItem?.craftName}
                  className="inset-0 h-64 w-full rounded-t-lg object-cover transition-all duration-[1500ms] group-hover:scale-110"
                />
              </div>

              {craftItem?.status && (
                <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-primary text-center text-xs font-semibold text-accent-content poppins">
                  {craftItem?.status}
                </span>
              )}

              <div className="pt-1 px-5 pb-5 bg-[#FEFCFB]">
                <div>
                  <h5 className="text-neutral font-medium">
                    {craftItem?.craftName}
                  </h5>
                </div>

                <div className="mt-2.5 mb-3 flex items-center">
                  <span className="mr-2 rounded bg-[#CCCCCC] px-2.5 py-0.5 text-xs font-semibold text-primary-content">
                    {craftItem?.rating}
                  </span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#CCCCCC]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#CCCCCC]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#CCCCCC]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#CCCCCC]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#CCCCCC]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>

                <div>
                  <h2 className="flex items-center gap-[1px] text-primary-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                      <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                    </svg>
                    Customization :{" "}
                    <span className="font-normal ml-[2px] text-secondary-content">
                      {craftItem?.customization}
                    </span>
                  </h2>
                </div>

                <div className="text-primary-content mt-1 mb-3">
                  <span className="">Availability : </span>
                  <span className="font-normal text-secondary-content">
                    {" "}
                    {`   ${craftItem.stockStatus}`}
                  </span>
                </div>

                <div className="poppins flex pt-[3px] items-center justify-between">
                  <p className="space-x-1">
                    <span className="text-base font-bold text-primary-content">
                      {craftItem?.price}$
                    </span>
                  </p>
                  <div>
                    <Link
                      to={`/Update/${craftItem?._id}`}
                      className="bg-base-300 text-xs font-medium uppercase hover:bg-primary p-2 px-3 rounded-full transition-all duration-300"
                    >
                      Update
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() => handleRemove(craftItem._id)}
                      className="bg-secondary text-xs font-medium uppercase hover:bg-primary p-2 px-3 rounded-full transition-all duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default MyArtAndCraftListPage;
