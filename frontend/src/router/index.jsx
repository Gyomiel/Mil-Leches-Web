import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import Help from "../pages/Help/Help";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ProfilePetsitter from "../pages/ProfilePetsitter/ProfilePetsitter";
import OwnerProfile from "../pages/OwnerProfile/OwnerProfile";
import NotFound from "../pages/NotFound/NotFound";
import ContactUs from "../pages/ContactUs/ContactUs";
import Prueba from "../pages/prueba/Prueba"
import PetsitterCard from "../components/PetsitterCard/PetsitterCard";


const ownerRoute = () => {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  if (!token || role !== "owner") {
    return redirect("/");
  } else {
    return null;
  }
};

const petSitterRoute = () => {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  if (!token || role !== "petsitter") {
    return redirect("/");
  } else {
    return null;
  }
};

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
        path: "/ProfilePetsitter",
        loader: petSitterRoute,
        element: <ProfilePetsitter />,
      },
      {
        path: "/ProfileOwner",
        loader: ownerRoute,
        element: <OwnerProfile />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/results",
        element: <PetsitterCard/>
      },
    ],
  },
]);

export default router;
