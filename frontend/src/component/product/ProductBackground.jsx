import background from '../../assets/vedios/background.mp4'
export const ProductBackground = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[rgba(251,250,248,1)]">
      {/* Top Section */}
      <div className="relative z-10 max-w-4xl mx-auto py-1 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
            <h1></h1>
          <p className="text-[12px] text-gray-600 leading-relaxed max-w-3xl">
            <strong>ACER</strong>, Acer Nitro V, Intel Core i5- 13th Gen 13420H processor, NVIDIA GeForce RTX 4050-6 GB GDDR6(16GB DDR5/512GB)IPS FHD, 39.62cm(15.6"), 165 Hz, Win 11 Home,Obsidian black, 2.113 kg, ANV15-51,Gaming Laptop.
          </p>
        </div>
      </div>

      {/* Video Background Section */}
      <div className="relative w-full h-96 md:h-[500px] lg:h-[500px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={background}   // <-- Correct path for public folder
        autoPlay
        loop
        muted
        playsInline
      />
      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
    </div>
    </div>
  );
};