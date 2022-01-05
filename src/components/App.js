import React, { useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"

function App() {

  // Contact list
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Ankita",
  //     email: "ankita@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Yash",
  //     email: "yash@gmail.com"
  //   }
  // ];

  const [contacts, setContacts] = useState([]);

  // addContactHandler function
  const addContactHandler = (contact) => {
    console.log(contact);
  };
  
  return (
    <>  
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={ addContactHandler } />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
