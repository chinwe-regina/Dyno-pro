import React from "react";
import { RouterProvider } from "react-router-dom";
// import { RouterProvider2 } from "react-router-dom";
import { MainRouter } from "./Router/MainRouter";
// import { MainRouter2 } from "./Router2/MainRouter2";

function App() {
  return (
    <div>
      <RouterProvider router={MainRouter} />
      {/* <RouterProvider router={MainRouter2} /> */}
    </div>
  );
}

export default App;
