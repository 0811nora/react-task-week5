import ProductCard from "../components/ProdeuctCard";
import { useEffect, useState } from "react";
import { getAllProducts, } from "../api/Api";



function Product(){

    const [ allProduct , setAllProduct ] = useState([]);
    const [ categoryProduct , setCategoryProduct ] = useState([]);
    const [ targetCategory , setTargetCategory] = useState("全部");

    const categoryList = ["全部","清新果漾","職人花香","法式醇厚","經典茶韻","暖心堅果","東方旬味"];

    
    useEffect(()=>{
        console.log(allProduct)
    },[allProduct])
    
    useEffect(() => {
        const getProductData = async () => {
            try{
                const res = await getAllProducts();
                setAllProduct(res.data.products);
                setCategoryProduct(res.data.products);
                
            }catch(err){
                console.log(err)
            }
        }
        getProductData();
    },[])


    const headleCategory = (value) => {

        setTargetCategory(value);

        if(value === "全部"){
            setCategoryProduct(allProduct);
        }else{
            const data = allProduct.filter((item) => item.category === value);
            setCategoryProduct(data)
        }
    }


    return (
        <div className="bg-primary d-flex flex-column" style={{ minHeight: '88vh' }}>
            <div className="bg-primary py-5">
                <div className="container ">

                    <div className="text-center mb-5">
                        {categoryList.map((item) => (
                            <button key={item} 
                                className={`btn m-2 rounded-0 ${item === targetCategory ? "btn-dark" : "btn-outline-dark"}`} 
                                onClick={() => headleCategory(item)}>{item}
                            </button>
                        ))}
                    </div>
                    
                    <ProductCard data={categoryProduct}/>

                </div>
                

                
            </div>
        </div>
        
    )
    
}

export default Product;