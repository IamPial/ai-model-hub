import React from "react";

import { Suspense } from "react";
import AllModels from "./components/models/AllModels";

const fetchData = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const App = () => {
  const modelsPromise = fetchData();
  return (
    <div>
      <h1>Hello World</h1>
      <Suspense
        fallback={<div class="$$loading $$loading-bars $$loading-xl"></div>}
      >
        <AllModels modelsPromise={modelsPromise} />
      </Suspense>
    </div>
  );
};
export default App;
