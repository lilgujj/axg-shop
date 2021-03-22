import { Suspense } from "react";
import Layout from "./components/Layout";
import "./index.css"
import { BrowserRouter  } from "react-router-dom";
import DataProvider from "./context/CartContext";

function App() {
  return (

    <DataProvider>

      <Suspense fallback={<h2>Error</h2>}>

        <BrowserRouter>
          <div style={{ minHeight: '100%' }}>
            <Layout  />
          </div>
        </BrowserRouter>

      </Suspense>

    </DataProvider>
  );
}

export default App;
