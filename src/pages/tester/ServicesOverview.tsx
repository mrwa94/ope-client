import TesterServicesCard from "@/components/tester/cards/TesterServices";
import { servicesData } from "@/mock/data";
import { SquareMenu } from "lucide-react";

const ServicesOverview = () => {
  return (
    <div className=" p-9  ">
      <p className="text-2xl font-bold flex flex-row   gap-1 ">
        قائمة الخدمات
        <SquareMenu />
      </p>
      <div className=" grid  grid-cols-3  pt-9">
        {servicesData.map((service) => (
          <TesterServicesCard services={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
