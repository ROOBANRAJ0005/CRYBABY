import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom Left Arrow
function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

// Custom Right Arrow
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

export const Carousel = () =>{
  const images = [
    "/images/c1.png",
    "/images/c2.png",
    "/images/c3.png",
    "/images/c4.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full relative overflow-hidden">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full"
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="
                w-full
                h-100
                sm:h-40
                md:h-56
                lg:h-50
                object-cover
              "
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}
