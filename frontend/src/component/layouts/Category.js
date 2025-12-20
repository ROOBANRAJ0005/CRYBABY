import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";

export const Category = () => {
    const [open, setOpen] = useState(false); // for mobile hamburger
    const [catOpen, setCatOpen] = useState(false); // for desktop categories toggle

    const categories = [
        'Electronics',
        'Mobile Phones',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
    ];

  // Other main links
    const mainLinks = [

        "New Products",
        "Customer service",
        "About",
        "Contact Us",
        "Return & refund"
    ];
    const itemVariants = {
        hidden: { opacity: 0, y: -15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    };

    return (
        <header className="w-100 shadow-sm relative">
        {/* Top Bar */}

            <div  className="absolute top-[40px] right-[120px] z-[99] md:static md:top-auto md:right-auto md:z-auto" id="ham_barger ">
                {/* MOBILE: Hamburger Menu */}
                <div className="md:hidden px-3 mt-2">
                    <button
                    className="bg-white mb-2 p-2 rounded shadow absolute bottom-[100px] right-[-80px] z-[99]"
                    onClick={() => {
                        setOpen((p) => !p);
                        setCatOpen(false); // reset categories toggle when reopening
                    }}
                    >
                    ☰
                    </button>

                    <AnimatePresence>
                    {open && (
                        <motion.nav
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden text-black rounded shadow bg-white absolute top-[-30px] w-[600px] right-[-230px] pl-[130px] z-[50]"
                        >
                        <ul className="list-none p-2 m-0">
                            {/* Categories Toggle */}
                            <li>
                            <button
                                onClick={() => setCatOpen((p) => !p)}
                                className="w-full text-left font-bold px-4 py-2 bg-[rgb(217,146,80)] text-white rounded-none"
                            >
                                {catOpen ? "Categories ▲" : "Categories ▼"}
                            </button>

                            {/* Show categories list when toggled */}
                            <AnimatePresence>
                                {catOpen && (
                                <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="list-none mt-2 ml-2"
                                >
                                    {categories.map((cat, i) => (
                                    <motion.li
                                        key={i}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="py-1 px-2"
                                    >
                                        {cat}
                                    </motion.li>
                                    ))}
                                </motion.ul>
                                )}
                            </AnimatePresence>
                            </li>

                            <hr className="my-2 border-gray-300" />

                            {/* Main Links */}
                            {mainLinks.map((link, i) => (
                            <motion.li
                                key={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="py-2 px-2 rounded cursor-pointer hover:bg-gray-200"
                            >
                                {link}
                            </motion.li>
                            ))}
                        </ul>
                        </motion.nav>
                    )}
                    </AnimatePresence>
                </div>

                {/* DESKTOP: Categories Toggle + Links */}
                <div className="hidden md:block mt-2 px-3">
                    <div className="flex items-center justify-center gap-3 p-2 relative">
                    {/* Categories Toggle */}
                    <div className="relative">
                        <button
                        id="category_toggle"
                        onClick={() => setCatOpen((p) => !p)}
                        className="px-5 py-2 font-extrabold text-left text-[rgb(144,5,5)] bg-white rounded-none border-b-0 hover:text-[rgb(217,146,80)] hover:border-b-[3px] hover:border-b-[rgb(217,146,80)]"
                        >
                        {catOpen ? "Categories ▲" : "Categories ▼"}
                        </button>

                        {/* Dropdown Categories */}
                        <AnimatePresence>
                        {catOpen && (
                            <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="list-none mt-2 p-2 shadow rounded bg-white absolute z-10"
                            >
                            {categories.map((cat, i) => (
                                <motion.li
                                key={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="py-1 px-2 hover:bg-gray-100"
                                >
                                {cat}
                                </motion.li>
                            ))}
                            </motion.ul>
                        )}
                        </AnimatePresence>
                    </div>

                    {/* Other Links */}
                    {mainLinks.map((link, i) => (
                        <a
                        key={i}
                        href="#"
                        className="!no-underline px-2 py-1 font-medium !text-[rgb(144,5,5)] hover:!text-[rgb(217,146,80)] hover:border-b-[3px] border-[rgb(217,146,80)]"
                        >
                        {link}
                        </a>
                    ))}
                    </div>
                </div>
            </div>



        </header>
    );
};
