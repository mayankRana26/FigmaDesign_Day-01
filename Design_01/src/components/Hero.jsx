import React from "react";

const HeroSection = () => {
  return (
    <div
      className="h-120 bg-pink-100 bg-cover bg-center flex items-center mt-2 border-t border-gray-200 p-8 md:p-16"
      style={{ backgroundImage: "url('/banerBG.jpg')" }}
    >
      <div className="max-w-xl text-black  p-6 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
          Government Schemes
        </h1>

        <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-2">
          an Yojanas.
        </h1>

        <h1 className="text-4xl md:text-2xl font-semibold text-pink-600 mb-6">
          for women.
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Here you will find all kinds of government schemes and yojanas. Click
          the link to visit their official website.
        </p>

        <button className="text-pink-600 bg-white py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
