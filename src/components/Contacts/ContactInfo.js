import "./Contacts.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-container flex flex-col justify-center space-x-0 space-y-10 py-12 md:flex-row md:space-x-28 md:space-y-0 md:py-7 lg:space-x-40 ">
      <a
        href="tel:8054533586"
        className="contact-info-link flex items-center justify-center"
      >
        <i className="fa-solid fa-phone mr-8 text-3xl text-[#8844DA]"></i>
        <p>+(805) 453-3586</p>
      </a>

      <a
        href="mailto:support@shinefy.com"
        className="contact-info-link flex items-center justify-center"
      >
        <i className="fa-regular fa-envelope mr-8 text-3xl text-[#8844DA]"></i>
        <p>support@shinefy.com</p>
      </a>
    </div>
  );
};

export default ContactInfo;
