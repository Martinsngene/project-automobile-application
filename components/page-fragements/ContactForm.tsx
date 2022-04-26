import { useState } from "react";
import { CustomButton } from "../buttons/Buttons";
import InputField from "../form-elements/InputField";
import Textarea from "../form-elements/TextArea";
import ErrorMessage from "../globals/ErrorMessage";
import RadioButtonsGroup from "./RadioButtonsGroup";

const ContactForm = () => {
  // State management for contact form
  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    email: "",
    lastName: "",
    phone: "",
    message: "",
  });

  // State management for error messages
  const [error, setError] = useState(0);

  // function to collect form details and save most recent state of inputs
  const handleContactDetails = (value: any) => {
    setContactDetails({ ...contactDetails, ...value });
  };

  // Validation function, also submits form to server
  const InputValidator = (value: any) => {
    if (value.firstName === "") {
      setError(1);
    } else if (value.email === "") {
      setError(2);
    } else if (value.lastName === "") {
      setError(3);
    } else if (value.phone === "") {
      setError(4);
    } else if (value.message === "") {
      setError(5);
    } else {
      document.location.reload();
    }
  };

  return (
    <div className="px-[30px] md:px-[100px]">
      <h2 className="text-[#4cafd9]  font-[700] text-[22px] sm:text-[24px] md:text-[36px] my-[1.5rem]">
        Let&apos;s Get Started:
      </h2>
      <p className="my-[0.3rem]">
        Whether you have a question about Tribe Clinical Research, need
        assistance, or you&apos;re in the area and would like to see our office,
        we&apos;re here to help!
      </p>
      <div className="col-span-1 pb-[2rem] md:pb-[0rem] pt-[2rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10">
          <div className="col-span-1">
            <InputField
              name="firstName"
              placeHolder="First Name"
              inputId="firstName"
              className="mb-[1rem] bg-[#f3f3f3] w-full px-[0.5rem] py-[0.7rem] outline-none"
              type="text"
              onChange={({ target: { value, name } }: any) =>
                handleContactDetails({ [name]: value })
              }
            />
            {error === 1 ? <ErrorMessage>Enter first name</ErrorMessage> : null}
          </div>
          <div className="col-span-1">
            <InputField
              name="lastName"
              placeHolder="Last Name"
              inputId="lastName"
              className="bg-[#f3f3f3] w-full  px-[0.5rem] py-[0.7rem] outline-none"
              type="text"
              onChange={({ target: { value, name } }: any) =>
                handleContactDetails({ [name]: value })
              }
            />
            {error === 3 ? <ErrorMessage>Enter last name</ErrorMessage> : null}
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <InputField
              name="email"
              placeHolder="Email Address"
              inputId="email"
              className="mt-[1rem] bg-[#f3f3f3] w-full px-[0.5rem] py-[0.7rem] outline-none"
              type="email"
              onChange={({ target: { value, name } }: any) =>
                handleContactDetails({ [name]: value })
              }
            />
            {error === 2 ? (
              <ErrorMessage>Enter your email address</ErrorMessage>
            ) : null}
          </div>
          <div className="col-span-1">
            <InputField
              name="phone"
              placeHolder="Phone Number"
              inputId="phone"
              className="mt-[1rem] bg-[#f3f3f3] w-full px-[0.5rem] py-[0.7rem] outline-none"
              type="number"
              onChange={({ target: { value, name } }: any) =>
                handleContactDetails({ [name]: value })
              }
            />
            {error === 4 ? (
              <ErrorMessage>Enter your phone number</ErrorMessage>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-1">
          <RadioButtonsGroup />
        </div>
        <div className="grid grid-cols-1">
          <Textarea
            name="message"
            placeHolder="Message"
            textAreaId="message"
            className="h-[120px] px-[0.8rem] bg-[#f3f3f3] text-[#000] outline-none"
            containerStyles="mt-[1rem] mb-[1rem]"
            onChange={({ target: { value, name } }: any) =>
              handleContactDetails({ [name]: value })
            }
          />
          {error === 5 ? (
            <ErrorMessage>Please drop a message</ErrorMessage>
          ) : null}
        </div>
        <div className="grid grid-cols-1 px-[1.2rem]">
          <CustomButton
            className="bg-[#4CAFD9] hover:bg-[#242424] w-[150px] px-[1rem] py-[0.9rem] transition rounded-[1.5rem] flex items-center justify-center"
            textStyle="text-[#242424] hover:text-[#4CAFD9] text-[1rem] font-[700]"
            onClick={() => InputValidator(contactDetails)}
          >
            Submit
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
