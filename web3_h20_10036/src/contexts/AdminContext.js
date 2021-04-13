import React, {useState, createContext} from 'react';

/* I dette prosjektet har jeg kun brukt context på adminState da det var det eneste som var logisk å bruke context på.
 Det var ingen søskenkomponenter som hadde behov for state fra hverandre bortsett fra admin, dermed holdt jeg meg til vanlig props.
 Det jeg kunne gjort var å legge det om til context for å "futureproofe" det, men jeg føler det er greit å vise
 både props og context for å vise at jeg har kontroll på stoffet og vet hvordan man bruker begge deler. */

export const AdminContext = createContext();

export const AdminProvider = (props) => {

  const [adminState, setAdminState] = useState(true);

  return (
      <AdminContext.Provider value={{admin: [adminState, setAdminState]}}>
        { props.children }
      </AdminContext.Provider>
  )

}