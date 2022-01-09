import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }; 

    const contacts = [{
        id: "1",
        name: "ankita",
        email: "asnkita"
    }];
    const renderContactList = contacts.map((contact) => {
        return (
        <ContactCard 
        contact={contact} 
        clickHandler= { deleteContactHandler } 
        key = { contact.id }
        />
        );
    });
    
    return (
            <>
                <div className="ui celled list">
                    {renderContactList}
                </div>
            </>
    );
};

export default ContactList;