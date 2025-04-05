import { useState } from "react";
import contactImg from "../assets/contact-img.svg";
import Button from "./Button";

export default function Contact() {
    const FormInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(FormInitialDetails);

    
    const onFormUpdate = (field, value) => {
        setFormDetails((prevDetails) => ({
            ...prevDetails,
            [field]: value,
        }));
    };

    return (
        <div className="contact py-10 px-5 md:pb-30 pb-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                    {/* Img */}
                    <div className="w-3/4 md:w-1/3">
                        <img src={contactImg} alt="Contact" className="w-full mx-auto" />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-2/3">
                        <div className="text-center md:text-left">
                            <h1 className="ole-regular text-white text-3xl md:text-5xl mb-6" id="ContactUs">Get In Touch</h1>
                            <form>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            value={formDetails.firstName}
                                            onChange={(e) => onFormUpdate("firstName", e.target.value)}
                                            className="bg-transparent border p-3 rounded-full focus:outline-none w-full"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            value={formDetails.lastName}
                                            onChange={(e) => onFormUpdate("lastName", e.target.value)}
                                            className="bg-transparent border p-3 rounded-full focus:outline-none w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={formDetails.email}
                                            onChange={(e) => onFormUpdate("email", e.target.value)}
                                            className="bg-transparent border p-3 rounded-full focus:outline-none w-full"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone No."
                                            value={formDetails.phone}
                                            onChange={(e) => onFormUpdate("phone", e.target.value)}
                                            className="bg-transparent border p-3 rounded-full focus:outline-none w-full"
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Message"
                                        value={formDetails.message}
                                        onChange={(e) => onFormUpdate("message", e.target.value)}
                                        className="bg-transparent border p-3 rounded-[20px] focus:outline-none w-full h-40"
                                    />
                                    <div className="flex justify-center md:justify-start mt-5">
                                        <Button className="text-white px-6 py-2">Send</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
