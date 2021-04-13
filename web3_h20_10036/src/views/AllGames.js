import React, {useContext} from 'react';
import GamesList from "../components/GamesList";
import {AdminContext, AdminProvider} from "../contexts/AdminContext";

const AllGames = () => {

  const {admin} = useContext(AdminContext);
  const [adminState, setAdminState] = admin;

  return (
      <section>
        <AdminProvider>
          <GamesList/>
        </AdminProvider>
      </section>
  )
}

export default AllGames;