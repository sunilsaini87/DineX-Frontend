

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-red-900 text-white">
    <div className="container mx-auto flex flex-col lg:flex-row items-center py-12 px-4 lg:py-24 lg:px-8">
      <div className="w-full lg:w-1/2">
        <img
          src="/hero.png"
          alt="Delicious food"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Welcome to DineX</h1>
        <p className="text-2xl mb-6">100+ Partner Restaurants</p>
        <div className="flex space-x-4 mb-6">
          <img
            src="/DineX11.jpeg"
            alt="Partner 1"
            className="w-12 h-12 rounded-full"
          />
          <img
            src="/DineX12.jpeg"
            alt="Partner 2"
            className="w-12 h-12 rounded-full"
          />
          <img
            src="/DineX13.jpeg"
            alt="Partner 3"
            className="w-12 h-12 rounded-full"
          />
          <img
            src="/DineX14.jpeg"
            alt="Partner 3"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <button className="bg-white text-red-700 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
        Get Started
        </button>
        <p className="mt-4">Discover delicious meals and enjoy swift delivery with DineX.</p>
      </div>
    </div>
    <div className="container mx-auto py-8 px-4 lg:px-8 flex justify-between items-center bg-red-800 rounded-lg mt-12">
      <div className="text-center">
        <p className="text-xl font-bold">01</p>
        <p className="mt-2">Fast Delivery</p>
        <p className="mt-1 text-sm">Get your food delivered quickly and hot.</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">02</p>
        <p className="mt-2">Wide Variety</p>
        <p className="mt-1 text-sm">Choose from a vast range of cuisines.</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">03</p>
        <p className="mt-2">Easy Ordering</p>
        <p className="mt-1 text-sm">Simple and user-friendly ordering process.</p>
      </div>
    </div>
  </div>
  );
};

export default Hero;
