import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import customerSupport from "../../assets/images/customer-support.png";
import freedDelivery from "../../assets/images/freed-delivery.png";
import voucher from "../../assets/images/gifr-voucher.png";
import saveMoney from "../../assets/images/save-money.png";

const ViewDetailsPage = () => {
  const data = useLoaderData();
  const {
    image,
    description,
    discountPrice,
    name,
    stockQuantity,
    comment,
    stockStatus,
    regularPrice,
    reviews,
    productType,
    categoryName,
    customization,
    prreparingTime,
  } = data ?? {};
  return (
    <>
      <section className="py-[70px]">
        <div className="poppins container w-[87%] mx-auto bg-accent-content">
          <div className="px-4">
            <div className="flex flex-col md:flex-row gap-9">
              <div className=" md:basis-[50%]">
                <div className="md:sticky md:top-5">
                  <div className="w-full mx-auto border border-[#EEEEEE] rounded-md">
                    <img
                      className="h-full w-full object-cover rounded-md"
                      src={image}
                      alt={name}
                    />
                  </div>
                </div>
              </div>

              <div className="md:basis-[50%]">
                <h1 className="sm: text-2xl dmsans font-medium text-primary-content sm:text-3xl">
                  {name}
                </h1>

                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    <svg
                      className="block h-5 w-5 align-middle text-[#ccc]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="block h-5 w-5 align-middle text-[#ccc]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="block h-5 w-5 align-middle text-[#ccc]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="block h-5 w-5 align-middle text-[#ccc]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="block h-5 w-5 align-middle text-[#ccc]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="ml-2 text-sm font-medium text-neutral">
                    {reviews ?? "1 "}Reviews
                  </p>
                </div>

                <div className="flex items-end gap-1 font-medium mt-2">
                  {regularPrice && (
                    <span className="text-lg text-[#787878] line-through">
                      ${regularPrice}
                    </span>
                  )}
                  <h2 className="text-2xl text-primary-content">
                    ${discountPrice}
                  </h2>
                </div>

                <div className="font-medium text-[#666] text-sm space-y-2 mt-3">
                  {categoryName && (
                    <h2>
                      Category :{" "}
                      <span className="font-normal">{categoryName}</span>
                    </h2>
                  )}

                  {productType && (
                    <h2>
                      Product Type :{" "}
                      <span className="font-normal">{productType}</span>
                    </h2>
                  )}
                </div>

                {(customization || prreparingTime) && (
                  <div className="flex gap-4 font-medium text-[#666] text-sm mt-3">
                    {customization && (
                      <h2 className="flex items-center gap-[1px]">
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
                        <span className="font-normal">{customization}</span>
                      </h2>
                    )}

                    {prreparingTime && (
                      <h2 className="flex items-center gap-[1px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        Preparing Times :{" "}
                        <span className="font-normal">{prreparingTime}</span>
                      </h2>
                    )}
                  </div>
                )}

                <div className="mt-3">
                  <p className="poppins font-medium  text-[15px] text-primary-content">
                    Hurry! Only{" "}
                    <span className="text-base font-bold text-[#ff3d12]">
                      <Typewriter
                        loop={Infinity}
                        words={
                          stockQuantity ?? `${Math.round(Math.random() + 2)}`
                        }
                      />
                    </span>{" "}
                    units left in stock!
                  </p>
                  <progress
                    className="progress progress-warning bg-[#E1E1E1] w-[70%]"
                    value={stockQuantity ?? 3}
                    max="100"
                  ></progress>
                </div>

                <div className="mt-3 text-sm font-medium text-[#666]">
                  <span className=" ">Availability: </span>
                  <span className="font-normal"> {` ${stockStatus}`}</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-bold text-primary-content">
                    Sizes
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-12 h-12 border-2 hover:border-primary font-bold text-sm rounded-full flex items-center justify-center shrink-0"
                    >
                      SM
                    </button>
                    <button
                      type="button"
                      className="w-12 h-12 border-2 hover:border-primary border-primary-content font-bold text-sm rounded-full flex items-center justify-center shrink-0"
                    >
                      MD
                    </button>
                    <button
                      type="button"
                      className="w-12 h-12 border-2 hover:border-primary font-bold text-sm rounded-full flex items-center justify-center shrink-0"
                    >
                      LG
                    </button>
                    <button
                      type="button"
                      className="w-12 h-12 border-2 hover:border-primary font-bold text-sm rounded-full flex items-center justify-center shrink-0"
                    >
                      XL
                    </button>
                  </div>
                  <div className=" flex flex-wrap gap-x-4 items-center">
                    <button
                      type="button"
                      className=" flex items-center mt-6 px-7 py-3 bg-secondary hover:bg-primary text-primary-content rounded-[30px] transition-all duration-500"
                    >
                      BUY IT NOW
                    </button>
                    <button
                      type="button"
                      className="mt-6 px-7 py-3 bg-primary hover:bg-secondary text-white rounded-[30px] transition-all duration-500"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>

                <div className="border border-[#ccc] p-6 rounded-md mt-6">
                  <div className="grid lg:grid-cols-2  gap-6">
                    <div className="flex items-center gap-2">
                      <div className="basis-[13%]">
                        <img src={freedDelivery} alt="img" />
                      </div>
                      <div className="text-primary-content basis-[83%]">
                        <h3 className="font-medium">Free Delivery</h3>
                        <p className="text-sm">
                          Get Free Delivery with your purchase of $50 or more!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="basis-[13%]">
                        <img src={saveMoney} alt="img" />
                      </div>
                      <div className="text-primary-content basis-[83%]">
                        <h3 className="font-medium">Big Savings</h3>
                        <p className="text-sm">
                          Big Savings Await! Grab this deal now and save big!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="basis-[13%]">
                        <img src={customerSupport} alt="img" />
                      </div>
                      <div className="text-primary-content basis-[83%]">
                        <h3 className="font-medium">Customer Supports</h3>
                        <p className="text-sm">
                          Contact us for any assistance or queries.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="basis-[13%]">
                        <img src={voucher} alt="img" />
                      </div>
                      <div className="text-primary-content basis-[83%]">
                        <h3 className="font-medium">Gift Voucher</h3>
                        <p className="text-sm">
                          Receive a Gift Voucher with your purchase! Conditions
                          apply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className="mt-5">
              <div>
                <div role="tablist" className="tabs tabs-lifted">
                  <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-primary-content font-semibold"
                    aria-label="DISCRETION"
                    checked
                  />
                  <div
                    role="tabpanel"
                    className="tab-content text-sm text-secondary-content p-6"
                  >
                    {description}
                  </div>

                  <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-primary-content font-semibold"
                    aria-label="REVIEW"
                  />
                  <div
                    role="tabpanel"
                    className="tab-content text-sm text-secondary-content p-6"
                  >
                    {comment}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewDetailsPage;
