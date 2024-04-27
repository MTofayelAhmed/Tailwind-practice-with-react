// import React from 'react';

import { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {

    const [prices, setPrices]= useState([])
    useEffect(()=> {
        fetch("price.json")
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])
  return (
    <div>
      <h1 className=" text-7xl mt-10 bg-purple-300 text-purple-800  text-center pt-4 pb-4">
        Awesome affordable prices
      </h1>
      <div className=" grid grid-cols-3 gap-3">
        {
            prices.map(price => <PriceCard key ={price.id} price={price}> </PriceCard>)
        }
      </div>
    </div>
  );
};

export default PriceList;
