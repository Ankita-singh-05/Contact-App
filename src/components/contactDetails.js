import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    return (
       <>
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={} alt= "user" />
                </div>
                <div className="content">
                    <div className="header">
                        Ankita
                    </div>
                    <div className="description">
                        as.ankita@gmail.com
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default ContactCard;