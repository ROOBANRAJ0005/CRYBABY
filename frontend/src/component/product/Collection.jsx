import { useNavigate } from "react-router-dom";
import { Heading } from "../layouts/Heading";

const categories = [
  {
    name: "Mobile Phones",
    image: "/images/collection/mobile.jpg",
  },
  {
    name: "Laptops",
    image: "/images/collection/laptop.jpg",
  },
  {
    name: "Accessories",
    image: "/images/collection/accessory.jpg",
  },
  {
    name: "Headphones",
     image: "/images/collection/headphone.jpg",
  },
    {
    name: "Books",
   image: "/images/collection/book.jpg",
  },
  {
    name: "Clothes/Shoes",
  image: "/images/collection/cloths.jpg",
  },
  {
    name: "Beauty/Health",
   image: "/images/collection/beauty.png",
  },
  {
    name: "Sports",
       image: "/images/collection/sport.jpg",

  },
  //  {
  //   name: "Outdoor",
  //  image: "/images/collection/mobile.jpg",
  // },
  //  {
  //   name: "Home",
  //  image: "/images/collection/mobile.jpg",
  // },
];

export const Collection = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/search/${encodeURIComponent(category)}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 -mt-[50px]">
      <Heading name="COLLECTION" />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden h-40 sm:h-48 md:h-60 lg:h-80 "
          >
                <div className="group w-full h-80 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 group-active:scale-105"
                    />
                  </div>

            <div className="absolute bottom-4 z-10">
              <span
                onClick={() => handleClick(item.name)}
                className="bg-orange-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md shadow-md cursor-pointer text-[10px] sm:text-[10px] md:text-[15px]"
              >
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
