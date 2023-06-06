import React from 'react';
import ReactDOM from "react-dom";
// import NameApplication from "./App";

ReactDOM.render(
  // Our main React application component, which we've imported from another file
//   <NameApplication />,
    <h1>Hello, I'm React!</h1>,
  // Gets rendered to the <div> we defined in our Django template using the shared id
  document.getElementById('js-framework-home')
);