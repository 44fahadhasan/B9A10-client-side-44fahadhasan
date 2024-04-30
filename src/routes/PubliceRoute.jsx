import { createBrowserRouter } from "react-router-dom";
import AddCraftItemPage from "../pages/AddCraftItemPage/AddCraftItemPage";
import AllArtAndCraftItemsPage from "../pages/AllArtAndCraftItemsPage/AllArtAndCraftItemsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MyArtAndCraftListPage from "../pages/MyArtAndCraftListPage/MyArtAndCraftListPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UpdatedPage from "../pages/UpdatedPage/UpdatedPage";
import ViewDetailsPage from "../pages/ViewDetailsPage/ViewDetailsPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "All-Art-&-Craft-Items",
        element: <AllArtAndCraftItemsPage />,
      },
      {
        path: "Add-Craft-Item",
        element: (
          <PrivateRoute>
            <AddCraftItemPage />
          </PrivateRoute>
        ),
      },
      {
        path: "View-Details/:categoryId/:productId",
        loader: ({ params }) =>
          fetch(
            `https://b9a10-server-side-44fahadhasan.vercel.app/${params.categoryId}/${params.productId}`
          ),
        element: (
          <PrivateRoute>
            <ViewDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "My-Art-&-Craft-List",
        element: (
          <PrivateRoute>
            <MyArtAndCraftListPage />
          </PrivateRoute>
        ),
      },
      {
        path: "Register",
        element: <RegisterPage />,
      },
      {
        path: "Login",
        element: <LoginPage />,
      },
      {
        path: "Update/:productId",
        loader: ({ params }) =>
          fetch(
            `https://b9a10-server-side-44fahadhasan.vercel.app/add-craft-item/${params.productId}`
          ),
        element: (
          <PrivateRoute>
            <UpdatedPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default routes;
