import { Triangle } from "react-loader-spinner";

const LoadingSpnninner = () => {
  return (
    <div>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingSpnninner;
