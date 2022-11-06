import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => {
        //console.log(contact);
        return (
            <ContactCard contactcard = {contact}/>
        )
    } 
    )
    return (
        <div className="flex flex-col items-center my-3">
            <h2 className="text-left text-xl my-3 font-semibold">Contact list</h2>
            
                {renderContactList}
            
        </div>



    )
}
export default ContactList