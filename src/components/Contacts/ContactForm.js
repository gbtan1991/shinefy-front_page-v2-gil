"use client";

import { useState } from "react";

import "./Contacts.css";

const ContactForm = () => {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSubmitForm = () => {
    setContactSuccess(true);
    setNameValue("");
    setPhoneValue("");
    setEmailValue("");
    setMessageValue("");
  };

  // *** Temporarily returns empty div for partial deployment - JOHN 22/09/23 ***
  if (true) {
    return <div className="mt-32"></div>;
  }

  return (
    <section className="flex flex-col items-center md:my-20 md:p-2.5">
      <div className="contact-form-container z-20 p-6 py-24 md:mx-auto md:p-16 xl:p-24">
        <div className="contact-form-head">
          <h2 className="contact-form-title mb-2.5">Contact Us</h2>
          <p className="contact-form-header mb-2.5">Get in Touch with Us</p>
          <p className="contact-form-subheader mb-2.5">
            Any concerns about our Terms of Use, <br />
            please reach out to us.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <input
                type="text"
                className="block h-[50px] w-full rounded-md border border-gray-300 p-2 pl-4 focus:ring focus:ring-opacity-50"
                placeholder="Name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="block h-[50px] w-full rounded-md border border-gray-300 p-2 pl-4 focus:ring focus:ring-opacity-50"
                placeholder="Phone"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
              />
            </div>
          </div>
          <div>
            <input
              type="email"
              className="block h-[50px] w-full rounded-md border border-gray-300 p-2 pl-4 focus:ring focus:ring-opacity-50"
              placeholder="Email address"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
          <div>
            <textarea
              className="block w-full rounded-md border border-gray-300 p-2 pl-4 focus:ring focus:ring-opacity-50"
              rows="4"
              placeholder="Message"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            />
          </div>
          <div className="text-center md:text-right">
            <button
              // type="submit"
              className="submit-btn"
              onClick={handleSubmitForm}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          contactSuccess ? "z-30 opacity-100" : "opacity-0"
        } contact-form-success-container absolute mt-16 flex h-[620px] w-[90%] flex-col items-center justify-center rounded px-4 md:h-[500px] md:w-[550px] xl:h-[550px]`}
      >
        <p className="global-header-text-1 mb-5 text-center">Thank you!</p>
        <p className="global-header-text-2 mb-4 max-w-[340px] text-center">
          Your inquiry is on its way to us.
        </p>
        <p className="global-header-text-3 mb-10 max-w-[460px] text-center">
          In our effort to provide you quality products and service. Our support
          team will get back to you within 24-48 hours.
        </p>

        <button
          className="contact-form-success-close-btn"
          onClick={() => setContactSuccess(false)}
        >
          <img src="/images/global/close-icon.png" alt="close icon" />
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
