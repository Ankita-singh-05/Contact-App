import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
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
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  // addContactHandler function
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id: uuid(), ...contacts}]);
  };

  // remove contact handler --delete function
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id  !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>  
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={ addContactHandler } />
        <ContactList contacts={contacts} getContactId= { removeContactHandler }  />
      </div>
    </>
  );
}

export default App;
