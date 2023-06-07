import React from 'react';
import ReactDOM from "react-dom/client";
import NameApp from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <NameApp />
    </React.StrictMode>
  );

// ReactDOM.render(
//   // Our main React application component, which we've imported from another file
//   // Gets rendered to the <div> we defined in our Django template using the shared id
//   <NameApp />,
//   document.getElementById('root')
// );