// import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Feature = ({ feature }) => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon className="size-4 text-red-950" />
      <span>{feature}</span>
    </div>
  );
};

export default Feature;
