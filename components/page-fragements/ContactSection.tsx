import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-[5rem] pt-[2rem]">
      <div className="col-span-1">
        <ContactForm />
      </div>
      <div className="col-span-1 border-t-[1px] md:border-t-0 border-l-0 md:border-l-[1px] border-[#d4d4d4]">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactSection;
