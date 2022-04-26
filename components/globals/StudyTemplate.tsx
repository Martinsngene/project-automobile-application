import CustomLink from "./CustomLink";

interface StudyTemplatePropsI {
  studyName: string;
  studyId: string;
  studyHref: string;
}

const StudyTemplate = ({
  studyName,
  studyId,
  studyHref,
}: StudyTemplatePropsI) => {
  return (
    <div className="flex flex-col items-center justify-center w-[268px] md:w-[250px] h-full">
      <div className="w-[268px] md:w-[250px] h-[268px]">
        <div className="bg-[#f3f3f3] text-[#000] text-[18px] md:text-[22px] border-[1px] font-[700] border-[#ddd] h-[90%] flex items-center justify-center relative">
          <h2 className="customUnderline text-center">{studyName}</h2>
        </div>
        <div className="bg-[#682145] text-[#fff] text-[18px] md:text-[22px] h-[10%] font-[700] flex items-center justify-center">
          <h2>NOW ENROLLING</h2>
        </div>
      </div>
      <p className="py-[0.7rem]">
        <strong>Study ID:&nbsp;</strong>
        <span className="uppercase">{studyId}</span>
      </p>
      <CustomLink
        href={studyHref}
        textStyle="underline underline-offset-4 cursor-pointer text-[#4cafd9] hover:text-[#682145] text-[16px] md:text-[18px] font-[600]"
      >
        Download PDF
      </CustomLink>
    </div>
  );
};

export default StudyTemplate;
