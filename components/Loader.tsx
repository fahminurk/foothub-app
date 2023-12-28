import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BounceLoader />
    </div>
  );
};

export default Loader;
