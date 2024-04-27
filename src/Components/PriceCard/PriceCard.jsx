// import React from 'react';

const PriceCard = ({ price }) => {
  return (
    <div>
      <h4 >
        <span className="text-3xl font-extrabold text-purple-900 ">{price.price}</span>
        <span>/month</span>
        
      </h4>
      <h2 className="text-4xl font-bold text-purple-500">{price.name}</h2>
    </div>
  );
};

export default PriceCard;
