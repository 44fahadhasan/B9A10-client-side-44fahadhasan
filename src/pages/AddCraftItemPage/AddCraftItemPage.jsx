import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Button from "../../components/Button/Button";
import SectionContent from "../shared/SectionContent/SectionContent";

const AddCraftItemPage = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  // from handler
  const onSubmit = (data) => {
    const userName = data.userName;
    const email = data.email;
    const craftName = data.craftName;
    const category = data.category;
    const imageurl = data.imageurl;
    const price = data.price;
    const rating = data.rating;
    const stockStatus = data.stockStatus;
    const customization = data.customization;
    const processingTime = data.processingTime;
    const description = data.description;

    const productInfo = {
      userName,
      email,
      craftName,
      category,
      imageurl,
      price,
      rating,
      stockStatus,
      customization,
      processingTime,
      description,
    };

    fetch("http://localhost:5003/add-craft-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Craft item added succesfull",
            icon: "success",
            confirmButtonText: "Done",
            confirmButtonColor: "#556f5f",
          });
          // from clear
          resetField("userName");
          resetField("email");
          resetField("craftName");
          resetField("category");
          resetField("imageurl");
          resetField("price");
          resetField("rating");
          resetField("stockStatus");
          resetField("customization");
          resetField("processingTime");
          resetField("description");
        }
      });
  };

  return (
    <section className="py-[70px] container w-[87%] mx-auto">
      <div className="w-full  shadow-md mx-auto md:w-[70%] lg:w-[60%] border rounded-md py-10 px-5 md:px-10">
        <div className="text-center mb-10">
          <SectionContent
            leftTitle="Add New"
            rightTitle="Craft"
            content="provide craft information to add"
          />
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-base">
              <label className="text-sm px-1 text-primary-content">
                User Name
              </label>
              <input
                {...register("userName", { required: true })}
                type="text"
                name="userName"
                placeholder="John Doe"
                className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
              />
              {errors.userName && (
                <span className="text-secondary text-xs">
                  User name must be provide
                </span>
              )}
            </div>

            <div className="space-y-1  text-base">
              <label className="text-sm px-1 text-primary-content">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="johndoe@example.com"
                className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
              />
              {errors.email && (
                <span className="text-secondary text-xs">
                  Email must be provide
                </span>
              )}
            </div>

            <div className="space-y-1 text-base">
              <label className="text-sm px-1 text-primary-content">
                Craft Name
              </label>
              <input
                {...register("craftName", { required: true })}
                type="text"
                name="craftName"
                placeholder="Terracotta Flower Pot
"
                className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
              />
              {errors.craftName && (
                <span className="text-secondary text-xs">
                  Craft name must be provide
                </span>
              )}
            </div>

            <div className="space-y-1 text-base">
              <label className="text-sm px-1 text-primary-content">
                Category
              </label>
              <input
                {...register("category", { required: true })}
                type="text"
                name="category"
                placeholder="Terra Cotta"
                className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
              />
              {errors.category && (
                <span className="text-secondary text-xs">
                  Category must be provide
                </span>
              )}
            </div>

            <div className="space-y-1  text-base">
              <label className="text-sm px-1 text-primary-content">
                Image URL
              </label>
              <input
                {...register("imageurl", { required: true })}
                type="url"
                name="imageurl"
                placeholder="https://example.images/terra-cotta-flower-pot"
                className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
              />
              {errors.imageurl && (
                <span className="text-secondary text-xs">
                  Image URL must be provide
                </span>
              )}
            </div>

            <div className="flex flex-col lg:flex-row gap-x-4 gap-y-1">
              <div className="space-y-1 text-base">
                <label className="text-sm px-1 text-primary-content">
                  Price
                </label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  name="price"
                  placeholder="90 $"
                  className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
                />
                {errors.price && (
                  <span className="text-secondary text-xs">
                    Price must be provide
                  </span>
                )}
              </div>

              <div className="pt-4 lg:pt-0  text-base">
                <label className="text-sm px-1 text-primary-content">
                  Rating
                </label>
                <input
                  {...register("rating", { required: true })}
                  type="number"
                  name="rating"
                  placeholder="70"
                  className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
                />
                {errors.rating && (
                  <span className="text-secondary text-xs">
                    Rating must be provide
                  </span>
                )}
              </div>

              <div className="pt-4 lg:pt-0 text-base">
                <label className="text-sm px-1 text-primary-content">
                  Stock status
                </label>
                <input
                  {...register("stockStatus", { required: true })}
                  type="text"
                  name="stockStatus"
                  placeholder="In stock/Order"
                  className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
                />
                {errors.stockStatus && (
                  <span className="text-secondary text-xs">
                    Stock status must be provide
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-x-4 ">
              <div className="text-base">
                <label className="text-sm px-1 text-primary-content">
                  Customization
                </label>
                <input
                  {...register("customization", { required: true })}
                  type="text"
                  name="customization"
                  placeholder="Yes/No"
                  className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
                />
                {errors.customization && (
                  <span className="text-secondary text-xs">
                    Customization must be provide
                  </span>
                )}
              </div>

              <div className="pt-5 lg:pt-0 text-base">
                <label className="text-sm px-1 text-primary-content">
                  Processing time
                </label>
                <input
                  {...register("processingTime", { required: true })}
                  type="text"
                  name="processingTime"
                  placeholder="3 days"
                  className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
                />
                {errors.rating && (
                  <span className="text-secondary text-xs">
                    Processing time must be provide
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-1 text-base">
              <label className="text-sm px-1 text-primary-content">
                Short description
              </label>

              <textarea
                {...register("description", { required: true })}
                placeholder="Describe your product information"
                className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
              />
              {errors.description && (
                <span className="text-secondary text-xs">
                  Description must be provide
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3 pt-3">
              <div className="w-full px-3 mb-3">
                <button className="w-full mx-auto ">
                  <Button text="ADD NOW" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCraftItemPage;
