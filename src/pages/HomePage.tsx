// import landingImage from "../assets/landing.png";
// import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12  ">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-red-700">
        Craving a Delicious Meal? Order Now!
        </h1>
        <span className="text-xl">Delicious Food Delivered to Your Doorstep</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="bg-white py-16 ">
      <div className="container mx-auto px-6 text-center ">
        <h2 className="text-xl font-semibold text-red-700 mb-2">Why Choose DineX?</h2>
        <h1 className="text-3xl font-bold mb-4">Your Food, Your Way</h1>
        <p className="text-lg mb-8">Experience the best food delivery service with DineX. From quick orders to a variety of options, we have it all.</p>
        
        <div className="flex justify-center mb-12">
          <img src="/DineX33.jpeg" alt="DineX" className="rounded-lg shadow-lg w-full md:w-1/2 object-cover" />
        </div>
        
        <div className="flex justify-center space-x-8 mb-16">
          <div className="flex items-center">
            <span className="text-red-700">⭐</span>
            <p className="ml-2">Top-rated Restaurants <br /> Partnered with the best restaurants in town.</p>
          </div>
          <div className="flex items-center">
            <span className="text-red-700">⏰</span>
            <p className="ml-2">24/7 Service <br /> Order anytime, anywhere.</p>
          </div>
          <div className="flex items-center">
            <span className="text-red-700">📍</span>
            <p className="ml-2">Track Your Order <br /> Live tracking of your delivery.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Affordable Plans</h2>
        <p className="text-lg mb-8">Choose a plan that suits your needs and enjoy exclusive benefits.</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="bg-red-50 p-6 rounded-lg shadow-lg w-full md:w-1/2 text-left">
            <h3 className="text-xl font-bold text-red-700 mb-4">Premium Membership</h3>
            <p className="text-lg mb-4">Get unlimited orders with no delivery fees.</p>
            <ul className="list-disc ml-6">
              <li>Unlimited free deliveries</li>
              <li>Priority customer support</li>
              <li>Exclusive discounts</li>
              <li>Access to special events</li>
            </ul>
          </div>
          <div className="bg-red-100 p-6 rounded-lg shadow-lg w-full md:w-1/4 text-center">
            <p className="text-xl font-semibold mb-2">Pay monthly, cancel anytime</p>
            <p className="text-3xl font-bold mb-2">$19.99 <span className="text-lg">USD</span></p>
            <button className="bg-red-700 text-white py-2 px-4 rounded-lg shadow-lg">Join Now</button>
            <p className="mt-2 text-sm">Cancel anytime, no hidden fees.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
