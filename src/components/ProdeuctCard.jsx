

function ProductCard({allProduct}) {


    return(
        <div className="productCard">
            <div className="row row-cols-2">
                {allProduct.map((item) => (
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="card position-relative mb-5 text-white" >
                            <div className="w-100 h-100 p-2">
                                <img src={item.imageUrl} className="img-fluid w-100 h-100 " alt="..."/>
                            </div>
                            <div className="card-body position-absolute bottom-0 start-0 w-100">
                                <h5 className="mb-2  me-2">{item.title}</h5>
                                <span className="mb-2">
                                    {item.tags.map((i) => (
                                        <span className="badge bg-dark fw-normal me-1">{i}</span>
                                    ))}

                                </span>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text fs-4 fw-bolder">${item.price}</p>
                                    <div>
                                        <button className="btn btn-dark px-4">
                                            <i className="bi bi-cart-plus-fill"></i>
                                        </button>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard;