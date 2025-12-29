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
  const [pageLoading, setPageLoading] = useState(true);
  const [showWaitMsg, setShowWaitMsg] = useState(true);
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowWaitMsg(false);
  }, 15000); // 15 seconds

  return () => clearTimeout(timer); // ✅ cleanup
}, []);

  // useEffect(() => {
  //  dispatch(getProducts(currentPage,null,null,null,null));

  // }, [dispatch,currentPage]);

  //   useEffect(() => {
  //   const loadData = async () => {
  //     setPageLoading(true);
  //     await dispatch(getProducts(currentPage, null, null, null, null));
  //     setPageLoading(false); 
  //     setShowWaitMsg(false);
  //   };

  //   loadData();
  // }, [dispatch, currentPage]);

  // if (pageLoading) {
  //   return <Loader />; // ✅ THIS WILL SHOW
  // }

  useEffect(() => {
  const warmAndFetch = async () => {
    try {
      // 🔥 warm up backend
      await fetch("https://crybaby-q8rs.onrender.com/health");

      // 🔥 now real api call
      await dispatch(getProducts(currentPage, null, null, null, null));
    } catch (err) {
      console.error("Warmup failed", err);
    }
  };

  warmAndFetch();
}, [dispatch, currentPage]);




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