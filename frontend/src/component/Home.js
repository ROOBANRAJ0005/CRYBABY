import React, { Fragment, useEffect, useState } from 'react';
import { MetaData } from './layouts/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsAction';
import { Product } from './product/Product';
import { Loader } from './layouts/Loader';
import { toast } from 'react-toastify';
import { Carousel } from './layouts/carousel';
import { Collection } from './product/Collection';
import { BestSeller } from './product/BestSeller';
import { ProductBackground } from './product/ProductBackground';


export const Home = () => {
  const dispatch = useDispatch();
  const { products = [], loading, error,} = useSelector((state) => state.productsState);
  const [currentPage]   = useState(1);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
   dispatch(getProducts(currentPage,null,null,null,null));

  }, [error,dispatch,currentPage]);


  return (
    <Fragment>
      <MetaData title={"Latest Products"} />
      {loading ? (
        <Loader />
      ) : (
        <div className='relative'>
        <Fragment>
          <div className="carousel-full">
            <Carousel />
          </div>
          <Collection/>
          <h1 id="products_heading">Latest Products</h1>
         <section className="max-w-7xl mx-auto mt-10 px-4">
            {/* <div className="row text-center"> */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <Product key={product._id} product={product}/>
                  // <Collection key={product._id} product={product} col={3}/>
                ))
              ) : (
                <div className="col-span-full text-center py-5">
                  <h4>No Products Found</h4>
                </div>
              )}
            </div>
          </section>
           <BestSeller/>
           <div className="carousel-full">
            <ProductBackground/>
          </div>
        </Fragment></div>
        
      )}
     
    </Fragment>
  );
};