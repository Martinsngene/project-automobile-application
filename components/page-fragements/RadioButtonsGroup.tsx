import InputField from "../form-elements/InputField";

const RadioButtonsGroup = () => {
  return (
    <div className="my-[1rem]">
      <h3>
        <strong>I am interested in becoming a:</strong>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        <InputField
          containerStyles="flex items-center justify-center"
          labelStyles="mr-[0.5rem] text-[0.8rem]"
          label="Volunteer"
          labelId="volunteer"
          type="radio"
          inputId="volunteer"
          name="member"
          value="Volunteer"
        />
        <InputField
          containerStyles="flex items-center justify-center"
          labelStyles="mr-[0.5rem] text-[0.8rem]"
          label="Area Provider"
          labelId="areaProvider"
          type="radio"
          inputId="areaProvider"
          name="member"
          value="Area Provider"
        />
        <InputField
          containerStyles="flex items-center justify-center"
          labelStyles="mr-[0.5rem] text-[0.8rem]"
          label="Sponsor"
          labelId="sponsor"
          type="radio"
          inputId="sponsor"
          name="member"
          value="Sponsor"
        />
        <InputField
          containerStyles="flex items-center justify-center"
          labelStyles="mr-[0.5rem] text-[0.8rem]"
          label="Other"
          labelId="other"
          type="radio"
          inputId="other"
          name="member"
          value="Other"
        />
      </div>
    </div>
  );
};

export default RadioButtonsGroup;
