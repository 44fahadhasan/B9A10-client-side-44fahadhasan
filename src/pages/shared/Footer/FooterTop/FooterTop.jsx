import Button from "../../../../components/Button/Button";

const FooterTop = () => {
  const handleEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.subscribeEamil.value);
    form.reset();
  };
  return (
    <div className="dmsans flex flex-col  items-center lg:flex-row lg:justify-between gap-6 py-12">
      <div>
        <h2 className="text-2xl text-center sm:text-3xl font-semibold text-primary-content">
          Subscribe to Our Newsletter
        </h2>
      </div>
      <div className="w-[70%] sm:w-[400px] lg:basis-[35%]">
        <form onSubmit={handleEmail}>
          <div data-style="clean" className="flex items-end ">
            <div
              data-element="fields"
              data-stacked="false"
              className="flex items-center w-full seva-fields formkit-fields"
            >
              <div className="relative w-full mr-3 formkit-field ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-secondary-content"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  id="member_email"
                  className="formkit-input bg-accent-content border-none  text-secondary-content text-sm rounded-full outline-none w-full pl-10 p-3  focus:ring-1 ring-primary"
                  aria-label="Email Address"
                  placeholder="Your email"
                  required=""
                  type="email"
                  name="subscribeEamil"
                />
                <button className="absolute inset-y-0 right-0 pr-2">
                  <span className="hidden sm:block">
                    <Button text="SUBSCRIBE" />
                  </span>
                  <span className="sm:hidden">
                    <Button text="GO" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterTop;
