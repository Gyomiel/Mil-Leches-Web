import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import Help from "../pages/Help/Help";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Owner from "../components/Owner/Owner"
import ProfilePetsitter from "../pages/ProfilePetsitter/ProfilePetsitter";
import OwnerProfile from "../pages/OwnerProfile/OwnerProfile";
import NotFound from "../pages/NotFound/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/OwnerProfile",
        element: <Owner />,
      },

      {
        path: "/ProfilePetsitter",
        element: <ProfilePetsitter />,
      },
      {
        path: "/ProfileOwner",
        element: <OwnerProfile />,
      },
    ],
  },
]);

export default router;
