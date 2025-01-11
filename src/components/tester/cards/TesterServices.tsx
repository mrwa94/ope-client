import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Services } from "@/types/type";
import { User, Info, Download } from "lucide-react";

const TesterServicesCard = ({ services }: { services: Services }) => {
  // const [selectedStatus, setSelectedStatus] = useState(services.id);

  return (
    <Card className="w-[300px] bg-primaryGreen-50 shadow-md rounded-lg bg-primaryGreen">
      <CardHeader className="p-2 border-b border-black"></CardHeader>

      <CardContent className="p-2 space-y-1 bg-white">
        <div className="flex items-center gap-2 text-sm">
          <Info className=" " />
          <p className="font-bold text-secondGreen">اسم الخدمة:</p>
          <p>{services.name}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <User className="text-secondGreen" />
          <p className="font-bold text-secondGreen">المحلل:</p>
          <p className="text-gray-800">{services.analysisName}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <User className="text-secondGreen" />
          <p className="font-bold text-secondGreen">المطور:</p>
          <p className="text-gray-800">{services.developerName}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <User className=" text-secondGreen" />
          <p className="font-bold text-secondGreen">المختبر المساعد:</p>
          <p className="text-gray-800">{services.testerHelperName}</p>
        </div>

        <hr className="border-gray-300" />
        <div className="mt-2">
          <p className="font-bold text-primaryGreen-700 text-sm">التفاصيل:</p>
          <p className="text-gray-800 leading-relaxed text-xs">
            {services.description}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-2 flex items-center justify-between gap-2  bg-primaryGreen ">
        <Button
          onClick={() => {}}
          className=" bg-secondGreen text-white border-secondGreen p-2 m-1   hover:bg-gray-400 hover:text-gray-100"
        >
          تحميل SRS
          <Download />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TesterServicesCard;
