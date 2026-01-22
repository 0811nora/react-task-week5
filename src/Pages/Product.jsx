import ProductCard from "../components/ProdeuctCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/Api";



function Product(){

    const [ allProduct , setAllProduct ] = useState([]);
    
    useEffect(()=>{
        console.log(allProduct)
    },[allProduct])
    
    useEffect(() => {
        const getProductData = async () => {
            try{
                const res = await getAllProducts();
                console.log(res.data.products)
                setAllProduct(res.data.products);
                
            }catch(err){
                console.log(err)
            }
        }
        getProductData();
    },[])

    return (
        <div className="bg-primary py-5">
            <div className="container">

                <div className="text-center mb-5">
                    <button className="btn btn-outline-dark active m-2">全部</button>
                    <button className="btn btn-outline-dark m-2">職人花香</button>
                    <button className="btn btn-outline-dark m-2">法式醇厚</button>
                    <button className="btn btn-outline-dark m-2">經典茶韻</button>
                    <button className="btn btn-outline-dark m-2">清新果漾</button>
                    <button className="btn btn-outline-dark m-2">暖心堅果</button>
                    <button className="btn btn-outline-dark m-2">東方旬味</button>
                </div>
                
                <ProductCard allProduct={allProduct}/>

                
            </div>
        </div>
        
    )
    
}

export default Product;