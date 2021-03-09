import React, { Suspense } from "react";
import Layout from "./components/Layout";
import "./index.css"
import { BrowserRouter  } from "react-router-dom";
import { Http2ServerRequest } from "node:http2";

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
