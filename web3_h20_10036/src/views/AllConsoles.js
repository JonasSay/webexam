import React from 'react';
import {AdminProvider} from "../contexts/AdminContext";
import ConsolesList from "../components/ConsolesList";

const AllConsoles = () => {

  return (
      <section>
       <AdminProvider>
         <ConsolesList/>
       </AdminProvider>
      </section>
  )
}

export default AllConsoles;