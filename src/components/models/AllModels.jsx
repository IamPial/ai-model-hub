import React from "react";
import { use } from "react";

const AllModels = ({ modelsPromise }) => {
  const data = use(modelsPromise);
  console.log(data);
  return (
    <div>
      <h1>Hello Models</h1>
      <div className="grid grid-cols-3 gap-3 container mx-auto">
        {data.map((model) => {
          return (
            <div key={model.id}>
              <h2>{model.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllModels;
