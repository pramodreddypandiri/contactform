import React from "react";

const ContactCard = ({contactcard}) => {
    console.log(contactcard);
    return (
        <div className="list rounded-md shadow-md shadow-blue-500 flex flex-row w-[300px] items-center justify-between">
                <div className="contact my-3 mr-3 px-5">
                    <div className="header text-left">{contactcard.name}</div>
                    <div className="text-left">{contactcard.email}</div>
                </div>

                <i className="fa-solid text-red-600 fa-trash px-4"></i>

            </div>

    )
}
export default ContactCard