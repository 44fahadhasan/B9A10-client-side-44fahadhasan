import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/svgImages/login.svg";
import Button from "../../components/Button/Button";
import Tost from "../../components/Tost/Tost";
import useAuth from "../../hooks/useAuth";
import SectionContent from "../shared/SectionContent/SectionContent";

const LoginPage = () => {
  const [toggle, setToggle] = useState(true);

  const { userLogin, loginWithGoogle, loginWithGithub } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  // from handler
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    userLogin(email, password)
      .then(() => {
        // Signed in
        toast.success("Login successful by email account");
        navigate(`${location?.state ?? "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });

    resetField("email");
    resetField("password");
  };

  // password view toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSocialLogin = (socialLogin, value) => {
    socialLogin()
      .then(() => {
        toast.success(`Login successful by ${value} account`);
        navigate(`${location?.state ?? "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="bg-accent-content  flex justify-center">
      <Tost />
      <div className="poppins max-w-screen-xl m-0 sm:m-20  flex justify-center flex-1">
        <div className="lg:basis-[60%]  p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <SectionContent
              leftTitle="Login For"
              rightTitle="Enjoy"
              content=""
            />
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => handleSocialLogin(loginWithGoogle, "google")}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-base-200 text-primary-content flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                  <div className="bg-accent-content p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Login with Google</span>
                </button>

                <button
                  onClick={() => handleSocialLogin(loginWithGithub, "github")}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-base-200 text-primary-content flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                >
                  <div className="bg-accent-content p-1 rounded-full">
                    <svg className="w-6" viewBox="0 0 32 32">
                      <path
                        fillRule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Login with GitHub</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-secondary-content tracking-wide font-medium bg-accent-content transform translate-y-1/2">
                  Or Login with e-mail
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-1  text-base">
                    <label className="text-sm px-1 text-primary-content">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
                    />
                    {errors.email && (
                      <span className="text-secondary text-xs">
                        Email must be provide
                      </span>
                    )}
                  </div>
                  <div className="space-y-1  text-base">
                    <label className="text-sm px-1 text-primary-content">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        {...register("password", { required: true })}
                        type={toggle ? "password" : "text"}
                        name="password"
                        placeholder="************"
                        className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-accent-content"
                      />
                      <span
                        className="absolute right-2 cursor-pointer"
                        onClick={handleToggle}
                      >
                        {(!toggle && (
                          <svg
                            className="w-6 h-6 text-[#9CA3AF]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="2"
                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeWidth="2"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        )) || (
                          <svg
                            className="w-6 h-6 text-[#9CA3AF] "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                    {errors.password && (
                      <span className="text-secondary text-xs">
                        Password must be provide
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 pt-3">
                    <div className="w-full px-3 mb-3">
                      <button className="w-full mx-auto ">
                        <Button text="LOGIN NOW" />
                      </button>
                    </div>

                    <Link to="/register">
                      <p className="text-center text-sm">
                        Don&rsquo;t have an account ?{" "}
                        <span className="underline ">register</span>
                      </p>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center justify-center bg-base-200 text-center hidden lg:flex rounded-md">
          <div className="p-[7%]">
            <img src={loginImage} alt="svg" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
