import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes/Routes";
import {AdminProvider} from "./contexts/AdminContext";

function App() {

  return (
      <>
          <AdminProvider>
            <Routes/>
          </AdminProvider>
      </>
  )

}

export default App;
