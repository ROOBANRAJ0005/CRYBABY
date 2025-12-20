import { motion } from "framer-motion";

export const Heading = ({ name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}          // start hidden & pushed down
      whileInView={{ opacity: 1, y: 0 }}       // fade up when visible
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}   // animate only once when 30% visible
      className="flex flex-col items-center my-4 p-4"
    >
      {/* Top Image */}
      <img
        src="/images/top.png"
        alt="Top Decoration"
        className="w-[250px] h-12 object-contain -mb-[5px]"
      />

      {/* Heading Text */}
      <h5 className="text-sm font-semibold text-gray-800 uppercase my-2">
        {name}
      </h5>

      {/* Bottom Image */}
      <img
        src="/images/bottom.png"
        alt="Bottom Decoration"
        className="w-[250px] h-12 object-contain -mt-[12px]"
      />
    </motion.div>
  );
};
