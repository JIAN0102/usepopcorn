/*
 * @Author:Jim Chen
 * @Date:2023-06-26 13:45:32
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-06-28 11:39:08
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} size={24} color="red" className="test" />
  </React.StrictMode>
);
