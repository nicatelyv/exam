import {createBrowserRouter} from 'react-router-dom'
import Addpage from '../Pages/AddPage/Addpage'
import DetailsPage from '../Pages/DetailsPage/DetailsPage'
import HomePage from '../Pages/HomePage/HomePage'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/addpage",
        element: <Addpage/>
    },
    {
        path: "/details/:id",
        element: <DetailsPage/>
    }
])