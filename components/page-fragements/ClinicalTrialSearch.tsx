import { MdChildCare, MdPeopleAlt } from "react-icons/md";

const ClinicalTrialSearch = () => {
  return (
    <div className="flex items-center justify-center my-[1rem] md:my-[1.5rem]">
      <div>
        <h2 className="my-[1.5rem] text-[24px] md:text-[32px] font-[600] text-[#616060]">
          Search By:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]">
          <div className="bg-[#f3f3f3] hover:bg-[#4cafd9] w-[200px] h-[70px] flex items-center justify-center cursor-pointer transition-colors">
            <span>
              <MdChildCare size={"50px"} />
            </span>
            <span className="ml-[0.5rem]">Pediatrics</span>
          </div>
          <div className="bg-[#f3f3f3] hover:bg-[#4cafd9] w-[200px] h-[70px] flex items-center justify-center cursor-pointer transition-colors">
            <span>
              <MdPeopleAlt size={"50px"} />
            </span>
            <span className="ml-[0.5rem]">Adults</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalTrialSearch;
