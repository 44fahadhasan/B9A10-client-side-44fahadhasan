import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
export default routes;
