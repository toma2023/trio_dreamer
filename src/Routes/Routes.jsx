import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Sale from "../Pages/Sale/Sale";
import Upcoming from "../Pages/Upcoming/Upcoming";
import PreOrder from "../Pages/Preorder/Preorder";
import VideoGallery from "../Pages/VideoGallery/VideoGallery";
import Affiliate from "../Pages/Affiliate/Affiliate";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
      {
        path: "/sale",
        element: <Sale/>,
      },
      {
        path: "/upcoming",
        element: <Upcoming/>,
      },
      {
        path: "/preOrder",
        element: <PreOrder/>,
      },
      {
        path: "/videoGalery",
        element: <VideoGallery/>,
      },
      {
        path: "/affiliate",
        element: <Affiliate/>,
      },
      {
        path: "/singleProduct/:id",
        element: <SingleProduct/>
      },


    ],
  },
]);
