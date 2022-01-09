import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    setContacts([...contacts,{ id: uuid(), ...contact }]);
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
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>  
      <div className="ui container">
        <Router>
        <Header />
        <Switch>
          {/* Switch match the first route that is / and diplay the contactList in the /add route also so we need to write exact */}
        <Route path="/" exact component = { ContactList } />
        <Route path="/add" component = { AddContact } />
        </Switch>
        {/* <AddContact addContactHandler={ addContactHandler } />
        <ContactList contacts={contacts} getContactId= { removeContactHandler }  /> */}
        </Router>
      </div>
    </>
  );
}

export default App;
