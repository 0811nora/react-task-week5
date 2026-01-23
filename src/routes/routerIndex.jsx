import App from '../App.jsx';
import { createHashRouter } from "react-router-dom";
import Home from '../Pages/Home.jsx';
import Product from '../Pages/Product.jsx';
import ProductDetail from '../Pages/ProductDetail.jsx';

const routes = [
    {
        path: '/',
        element: <App/>, 
        children:[  
            {index: true,  element: <Home/> },
            {
                path: 'product',
                element:<Product />,
            },
            {
                path:'/product/:id',
                element: <ProductDetail/>
            }
        ]
    },
    
]

const router = createHashRouter(routes);

export default router;