interface TextareaPropsI {
  label?: string;
  labelId?: string;
  name: string;
  textAreaId: string;
  className: string;
  containerStyles: string;
  onChange: any;
  placeHolder?: string;
}

const Textarea = ({
  label,
  labelId,
  name,
  textAreaId,
  className,
  containerStyles,
  onChange,
  placeHolder,
}: TextareaPropsI) => {
  return (
    <div className={containerStyles}>
      <label className="text-[14px] text-[#000] font-[400]" htmlFor={labelId}>
        {label}
      </label>
      <textarea
        className={`py-[1.2rem] mt-[1rem] w-full outline-none ${className}`}
        name={name}
        id={textAreaId}
        onChange={onChange}
        placeholder={placeHolder}
      ></textarea>
    </div>
  );
};

export default Textarea;
