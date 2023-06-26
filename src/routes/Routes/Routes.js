import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import AllDestinations from "../../pages/AllDestinations/AllDestinations";
import DestinationDetails from "../../pages/DestinationDetails/DestinationDetails";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import NotFound4o4 from "../../pages/NotFound4o4/NotFound4o4";
import MyReviews from "../../pages/Reviews/MyReviews";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AddDestination from "../../pages/AddDestination/AddDestination";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://time-to-travel-server-ehasanulh1.vercel.app/destinations')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/destinations',
                element: <AllDestinations></AllDestinations>,
                loader: () => fetch('https://time-to-travel-server-ehasanulh1.vercel.app/destinations/seeAll')
            },
            {
                path: '/destinations/:id',
                element: <DestinationDetails></DestinationDetails>,
                loader: ({ params }) => fetch(`https://time-to-travel-server-ehasanulh1.vercel.app/destinations/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/addDestination',
                element: <PrivateRoutes><AddDestination></AddDestination></PrivateRoutes>
            },
            {
                path: '*',
                element: <NotFound4o4></NotFound4o4>
            }
        ]
    }
])