import React, { Suspense } from "react";
import Layout from "./components/Layout";
import "./index.css"
import { BrowserRouter  } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<h2>Error</h2>}>
    <BrowserRouter>
      <div>
        <Layout  />
      </div>
    </BrowserRouter>

    </Suspense>
  );
}

export default App;
