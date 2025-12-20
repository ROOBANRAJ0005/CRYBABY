import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function NextArrow({ onClick }) {
  return (
    <button
      className="absolute -top-8 right-2 md:right-0 transform -translate-y-1/2 bg-white border p-2 rounded-full shadow hover:bg-gray-100 z-50"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      className="absolute -top-8 right-12 lef md:right-16 transform -translate-y-1/2 bg-white border p-2 rounded-full shadow hover:bg-gray-100 z-50"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
}

export const BestSeller = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/search/${encodeURIComponent(category)}`);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1280) setSlidesToShow(5);
    else if (windowWidth >= 1024) setSlidesToShow(3);
    else if (windowWidth >= 640) setSlidesToShow(2);
    else setSlidesToShow(2);
  }, [windowWidth]);


  const products = [
    { id: 1, name: "L'Oreal Paris Extraordinary Oil Hair Serum", price: 105.12, image: "/images/bestseller/beauty1.jpg"},
    { id: 2, name: "Korean Style Small Pearl", price: 5.00, image: "/images/bestseller/accessery1.jpg"},
    { id: 3, name: "Adhitha Karikalan Kolai", price:  30, image:  "/images/bestseller/book1.jpg" },
    { id: 4, name: "Silk Kanjivaram Kanchipuram Saree", price: 50, image: "/images/bestseller/clothes1.jpg" },
    { id: 5, name: "Acer Nitro V", price: 400, image: "/images/bestseller/laptop.jpg" },
    { id: 6, name: "iQOO Neo 10", price: 200, image: "/images/bestseller/mobile1.jpg" },
    { id: 7, name: "Boldfit Wrist Band", price: 20, image: "/images/bestseller/sport.jpg" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
  };
  
  return (
    <div className="relative w-full  max-w-6xl mx-auto px-4 py-8 -mt-[-50px]">
        <h1 className="ml-[15px]" id="bestseller"> BEST SELLER</h1>
      {typeof window !== "undefined" && (
        <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} 
            >
          <Slider key={slidesToShow} {...settings}>
            {products.map((item) => {

            return (
              <div key={item.id} className="px-2">
                <div
                    className="relative border rounded-lg overflow-hidden flex flex-col justify-start text-center h-70 sm:h-60 md:h-70 lg:h-80"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Image Container */}
                    <div className="text-center p-4 flex flex-col justify-end h-70 sm:h-50 md:h-100 lg:h-80">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-auto h-full md:h-40   object-contain"
                      />
                    </div>

                    <div>
                      <span className="font-semibold text-sm">{item.name}</span>
                      {item.oldPrice && (
                        <p className="line-through text-gray-400">
                          ₹{item.oldPrice}
                        </p>
                      )}
                      <p className="text-green-600 font-bold text-xs">
                        ₹{item.price}
                      </p>
                    </div>

            {/* Overlay Details */}
                    <div
                      className={`absolute left-0 right-0 bottom-0 bg-white bg-opacity-90 p-4 flex flex-col items-center gap-1 transition-transform duration-300 ${
                        isHovered ? 'translate-y-0' : 'translate-y-full'
                      }`}
                      >
                      <span className="text-gray-800 font-semibold text-xs">
                        {item.name} 
                      </span>
                      {item.oldPrice && (
                        <p className="line-through text-gray-400 text-xs">₹{item.oldPrice}</p>
                      )}
                      <p className="price text-green-600 font-bold text-xs">₹{item.price}</p>

                      <button  onClick={() => handleClick(item.name)} className="mt-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-700 py-2 px-2 !text-[10px] text-white font-semibold rounded w-full transition text-sm sm:text-xs md:text-lg">
                       View Details
                      </button>
                    </div>
                </div>
              </div>
            );
          })}
          </Slider>
        </motion.div>
      )}
    </div>
  );
};
