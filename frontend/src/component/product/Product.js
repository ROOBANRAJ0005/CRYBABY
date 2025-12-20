import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({product}) => {
  return (
    <>
            {/* <div className={`col-sm-12 col-md-6 col-lg-${col} my-3 product-title`}>
                    <div className="card p-3 rounded">
                      <img className="card-img-top mx-auto"
                        src={product.images[0].image} 
                        alt="product"
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                           <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h5>
                        <div className="ratings mt-auto text-center">
                          <div className="rating-outer">
                            <div className="rating-inner" style={{width:`${product.ratings/5*100}%`}}></div>
                          </div>
                          <span id="no_of_reviews">{product.numOfReviews}</span>
                        </div>
                        <p className="card-text text-center">${product.price}</p>
                          <Link to={`/product/${product._id}`} className="btn btn-block" id='view_details'> View Details</Link>
                      </div>
                    </div>
                  </div>  */}

<div className="bg-white rounded-lg shadow-md p-1 sm:p-1 md:p-3 lg:p-4 flex flex-col">
  <img
    src={product.images[0].image}
    alt="product"
    className="w-40 h-40 object-contain mx-auto"
  />

  <h5 className=" text-center font-semibold text-[12px] sm:text-[15px] md:text-[15px]">
    <Link to={`/product/${product._id}`} className="hover:text-blue-600 text-black text-decoration-none">
      {product.name}
    </Link>
  </h5>

  <div className="mt-auto text-center">
    <div className="ratings mt-auto text-center">
                          <div className="rating-outer">
                            <div className="rating-inner" style={{width:`${product.ratings/5*100}%`}}></div>
                          </div>
                          <span id="no_of_reviews">{product.numOfReviews}</span>
                        </div>
  </div>

  <p className="text-center font-bold mt-2 text-[12px] sm:text-[15px] md:text-[15px]">${product.price}</p>

  <Link
    to={`/product/${product._id}`}
    className="lg:mx-4 lg:my-4 bg-orange-500 hover:bg-green-600 text-white font-medium rounded-md shadow-md cursor-pointer py-2 text-decoration-none text-center rounded text-[12px] sm:text-[15px] md:text-[15px]"
  >
    View Details
  </Link>
</div>



                    </>

  )
}
