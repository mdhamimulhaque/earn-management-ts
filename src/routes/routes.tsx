import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Layouts/Main';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default routes;