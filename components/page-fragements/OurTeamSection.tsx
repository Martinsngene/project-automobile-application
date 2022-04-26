const OurTeamSection = () => {
  return (
    <div className="relative ">
      <div className=" w-full h-[220px] sm:h-[320px] md:h-[420px] ourTeamSection flex items-center justify-center md:mt-[4rem] md:mb-[10rem]"></div>
      <div className="static md:absolute mx-auto md:mx-0 w-[80%] md:w-[50%] left-[10%] top-[10%] md:block bg-[#fff] md:h-[575px] md:shadow-2xl md:px-[4rem] pt-[3rem]">
        <h2 className="text-[1.6rem] md:text-[2.13rem] font-[600] text-[#616060] mb-[0.2rem]">
          Our Team:
        </h2>
        <h2 className="text-[1.6rem] md:text-[2.13rem] font-[600] text-[#4cafd9] mb-[1.2rem]">
          Standard of Excellence
        </h2>
        <div>
          <p className="mb-[3rem]">
            Our clinical studies are administered by a team of healthcare
            professionals who have been involved in many successful research
            projects.
          </p>
          <p className="mb-[3rem]">
            We operate with a groundbreaking approach—partnering with primary
            care physicians in order to provide a better continuum of care for
            our patients.
          </p>
          <p>
            Tribe Clinical Research is recognized for excellent patient care,
            outstanding patient enrollment, and quality data management. We
            continually exceed standards of Good Clinical Practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
