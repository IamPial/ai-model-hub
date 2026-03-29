import React from "react";

const AllModels = ({ modelsPromise }) => {
  const data = use(modelsPromise);
  console.log(data);
  return (
    <div>
      <h1>Hello Models</h1>
    </div>
  );
};

export default AllModels;
