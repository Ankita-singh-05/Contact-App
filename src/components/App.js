import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"

function App() {

  // Contact list
  const contacts = [
    {
      id: "1",
      name: "Ankita",
      email: "ankita@gmail.com"
    },
    {
      id: "2",
      name: "Yash",
      email: "yash@gmail.com"
    }
  ];
  return (
    <>  
      <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
