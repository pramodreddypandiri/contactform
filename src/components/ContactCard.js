import React from "react";

const ContactCard = ({contactcard}) => {
    console.log(contactcard);
    return (
        <div className="list max-w-[300px]  rounded-md mb-5  shadow-md shadow-blue-500 flex flex-row items-center   ">
                <div className="contact w-4/5 my-3 mr-3 px-5">
                    <div className="header break-all text-left">{contactcard.name}</div>
                    <div className="text-left break-all">{contactcard.email}</div>
                </div>

                <i className="fa-solid w-1/5 text-red-600 fa-trash px-4"></i>

            </div>

    )
}
export default ContactCard