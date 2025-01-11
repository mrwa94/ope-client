import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RequestTasks } from "@/types/type";

import { User, Calendar, FileText, Clock, Star, Info, Download } from "lucide-react"
import { useState } from "react";


const TesterRequestCard = ({
  requestTasks,
  updateTaskStatus,
}: {
  requestTasks: RequestTasks;
  updateTaskStatus: (id: string, status: string) => void;
}) => {
  const [selectedStatus, setSelectedStatus] = useState(requestTasks.status);

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    updateTaskStatus(requestTasks.id, value);
  };
  return (
    <Card className="w-[300px] bg-primaryGreen-50 shadow-md rounded-lg bg-primaryGreen">
    <CardHeader className="p-2 border-b border-black">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-sm">
          <FileText  />
          <p className="font-bold  text-base">رقم الطلب:</p>
          <p className="">{requestTasks.requestNumber}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar  />
          <p className="font-bold">تاريخ الطلب:</p>
          <p >{requestTasks.createdAt.toLocaleDateString()}</p>
        </div>
      
      </div>
    </CardHeader>
  
    <CardContent className="p-2 space-y-1 bg-white">
    <div className="flex items-center gap-2 text-sm">
          <Info className=" " />
          <p className="font-bold text-secondGreen">اسم الخدمة:</p>
          <p >{requestTasks.name}</p>
        </div>
      <div className="flex items-center gap-2 text-sm">
        <User className="text-secondGreen" />
        <p className="font-bold text-secondGreen">المحلل:</p>
        <p className="text-gray-800">{requestTasks.analysisName}</p>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <User className="text-secondGreen" />
        <p className="font-bold text-secondGreen">المطور:</p>
        <p className="text-gray-800">{requestTasks.developerName}</p>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <User className=" text-secondGreen" />
        <p className="font-bold text-secondGreen">المختبر المساعد:</p>
        <p className="text-gray-800">{requestTasks.testerHelperName}</p>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Clock className="text-secondGreen" />
        <p className="font-bold text-secondGreen">مدة الاختبار:</p>
        <p className="text-gray-800">{requestTasks.time} أيام</p>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Star className="text-secondGreen" />
        <p className="font-bold text-secondGreen">الأولوية:</p>
        <span
          className="inline-block px-2 py-1 text-xs font-medium rounded-md text-white"
          style={{ backgroundColor: requestTasks.priority.color }}
        >
          {requestTasks.priority.name}
        </span>
      </div>
      <hr className="border-gray-300" />
      <div className="mt-2">
        <p className="font-bold text-primaryGreen-700 text-sm">التفاصيل:</p>
        <p className="text-gray-800 leading-relaxed text-xs">{requestTasks.description}</p>
      </div>
    </CardContent>
  
    <CardFooter className="p-2 flex items-center justify-between gap-2  bg-primaryGreen ">
      <Select  value={selectedStatus} onValueChange={handleStatusChange}>
        <SelectTrigger className="w-[140px] border-gray-900 text-xs bg-white">
          <SelectValue placeholder="اختر الحالة" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="to-do">جديد</SelectItem>
          <SelectItem value="in-progress">قيد التنفيذ</SelectItem>
          <SelectItem value="done">تم الحل</SelectItem>
        </SelectContent>
      </Select>
      <Button
      onClick={() => {}}
      className=" bg-secondGreen text-white border-secondGreen p-2 m-1 hover:bg-gray-400 hover:text-gray-100"
    >
      
      تحميل SRS
      <Download />
    </Button>
    </CardFooter>
  </Card>
  
  );
};

export default TesterRequestCard;
