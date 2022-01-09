import React from "react";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png" alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
        <i className="trash alternate outline icon"
         style={{ color: "red", marginTop: "7px"}}
          onClick={() => props.clickHandler(id) }
         >
         </i>
        </div>
    );
};

export default ContactCard;