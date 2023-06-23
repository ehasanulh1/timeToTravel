import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import AllDestinations from "../../pages/AllDestinations/AllDestinations";
import DestinationDetails from "../../pages/DestinationDetails/DestinationDetails";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/destinations')
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
                element:<AllDestinations></AllDestinations>,
                loader: ()=> fetch('http://localhost:5000/destinations/seeAll')
            },
            {
                path: '/destinations/:id',
                element: <DestinationDetails></DestinationDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/destinations/${params.id}`)
            }
        ]
    }
])