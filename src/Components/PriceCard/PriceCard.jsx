// import React from 'react';

import Feature from "../Features/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className=" bg-indigo-400 mt-6 px-4 py-2 rounded flex flex-col">
      <h4 className="text-center">
        <span className="text-3xl font-extrabold text-purple-900 ">
          {price.price}
        </span>
        <span>/month</span>
      </h4>
      <h2 className="text-4xl font-bold text-purple-500 text-center ">
        {price.name}
      </h2>
      <p className=" font-bold text-2xl">Features : </p>
      {price.features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}

        <button className="w-full bg-green-600 mt-auto hover:bg-green-300 text-white  text-bold rounded ">
          Buy Now
        </button>
     
    </div>
  );
};

export default PriceCard;
