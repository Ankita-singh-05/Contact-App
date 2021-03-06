import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const {name, email } = props.location.state.contact;
    //console.log(props);
    return (
       <>
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={} alt= "user" />
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">
                        {email}
                    </div>
                </div>
            </div>
            <div>
                <div className="center-div">
                    <Link to="/">
                        <button className="ui button blue center">
                            Back to Contact List
                        </button>
                    </Link>
                </div>
            </div>
        </div>
       </>
    );
};

export default ContactCard;