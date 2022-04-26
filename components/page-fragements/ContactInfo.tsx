const ContactInfo = () => {
  return (
    <div className="px-[30px] md:px-[100px]">
      <h2 className="text-[#4cafd9]  font-[700] text-[22px] sm:text-[24px] md:text-[36px] my-[1.5rem]">
        Contact Information:
      </h2>
      <div className="mb-[1.5rem] md:mb-[2.5rem]">
        <p>Tribe Clinical Research</p>

        <p className="my-[0.3rem]">545 Verdae Blvd., Suite B</p>

        <p>Greenville, SC 29607</p>
      </div>

      <div className="mb-[1.5rem] md:mb-[2.5rem]">
        <p>Phone: 864.334.0141</p>
        <p className="my-[0.3rem]">Fax: 864.334.0137</p>
        <p>Email: info@tribecr.com</p>
      </div>

      <div>
        <h3 className="text-[#4cafd9]  font-[700] text-[15px] mb-[0.5rem]">
          Hours of Operation:
        </h3>
        <p className="my-[0.3rem]">Monday - Thursday: 7:30 am to 4:30 pm</p>

        <p>Friday: 7:30 am to 12:30 pm</p>
      </div>
    </div>
  );
};

export default ContactInfo;
