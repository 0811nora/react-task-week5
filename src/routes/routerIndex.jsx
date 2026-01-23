import App from '../App.jsx';
import { createHashRouter } from "react-router-dom";
import Home from '../Pages/Home.jsx';
import Product from '../Pages/Product.jsx';

const routes = [
    {
        path: '/',
        element: <App/>, 
        children:[  
            {index: true,  element: <Home/> },
            {
                path: 'product',
                element:<Product />,
                children:[
                    {
                        path:'id',
                        element: <></>
                    }
                    
                ]
            }
        ]
    },
    
]

const router = createHashRouter(routes);

export default router;