import { HomeCardData } from "../constants/HomeCardData";
import Card from "../globals/Card";

const Logistics = () => {
  return (
    <div className="bg-[#e1e1e1] flex flex-col items-center justify-center w-full mt-[2rem] py-[4rem]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {HomeCardData.map((item, index) => (
          <Card
            key={index}
            src={item.url}
            buttonLabel={item.buttonLabel}
            header={item.header}
            href={item.href}
          >
            {item.description}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Logistics;
