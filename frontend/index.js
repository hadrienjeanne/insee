import React from 'react';
import { createRoot } from "react-dom/client";
import NameApp from "./App";


const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <NameApp />
    </React.StrictMode>
  );