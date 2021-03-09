import React from "react";
import Layout from "./components/Layout";
import "./index.css"
import { BrowserRouter  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout  />
      </div>
    </BrowserRouter>
  );
}

export default App;
