interface ErrorMessagePropsI {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessagePropsI) => {
  return (
    <div className="bg-red-500 text-[#fff] w-[220px] flex items-center justify-center text-[12px] p-1 rounded-[0.3rem]">
      {children}
    </div>
  );
};

export default ErrorMessage;
