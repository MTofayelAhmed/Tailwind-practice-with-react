// import React from 'react';

import { useEffect, useState } from "react";
import axios from "axios";
const PhoneBar = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    // .then(res => res.json())
    // .then(data => setPhones(data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
     const PhoneData =    loadedData.map((phone) => {
          const phoneData = phone.slug.split("-");
          const price = parseInt(phoneData[1]);
          const PhoneInfo = {
            name: phone.phone_name,
            rate: price,
          };

          return PhoneInfo;
        });
        console.log(PhoneData);
      });
  }, []);
  return <div></div>;
};

export default PhoneBar;
