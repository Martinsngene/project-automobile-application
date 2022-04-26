interface ListPropsI {
  listOne: any;
  listTwo: any;
  header: string;
}

const List = ({ listOne, listTwo, header }: ListPropsI) => {
  return (
    <div className="bg-[#f3f3f3] w-[80%] mx-auto mt-[2rem] md:mt-[10rem] py-[5rem] md:px-[50px]">
      <h2 className="text-[#616060] text-[22px] md:text-[32px] pl-[1rem]">
        {header}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[3rem]">
        <div className="customGrayDot list-disc pl-[0.5rem] md:pl-[2rem] col-span-1 text-[16px] md:text-[22px] text-[#4cafd9]">
          {listOne}
        </div>
        <div className="customGrayDot list-disc pl-[0.5rem] md:pl-[2rem] col-span-1 text-[16px] md:text-[22px] text-[#4cafd9]">
          {listTwo}
        </div>
      </div>
    </div>
  );
};

export default List;
