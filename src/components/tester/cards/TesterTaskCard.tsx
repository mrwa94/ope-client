import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Task } from "@/types/type";

const TesterTaskCard = ({
  task,
  updateTaskStatus,
}: {
  task: Task;
  updateTaskStatus: (id: string, status: string) => void;
}) => {
  const [selectedStatus, setSelectedStatus] = useState(task.status);
  const navigate = useNavigate();

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    updateTaskStatus(task.id, value); // تحديث حالة المهمة في اللوحة الأم (KanbanBoard)
  };

  const handleDetailsClick = () => {
    // Navigate to the report details page
    navigate(`/report-details?id=${task.id}`);
  };

  return (
    <Card className="w-[340px] shadow-xl  border-primaryGreen  ">
      <CardHeader className=" bg-primaryGreen p-3  rounded-t-lg">
        <div className="flex flex-row  justify-around">
          <div className=" text-black flex flex-row gap-1">
            <Label className="font-bold">رقم البلاغ:</Label>
            <Label>{task.numberReported}</Label>
          </div>

          <div className="flex flex-row">
            <p className="font-bold text-black px-1">حالة البلاغ:</p>
            <p
              className="rounded-md pr-2 pl-2"
              style={{ backgroundColor: task.priority.color }}
            >
              {" "}
              {task.priority.name}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="">
          <div className="pt-1 pb-4">
            <p className="font-bold">عنوان البلاغ:</p>
            <p>{task.title} </p>
          </div>

          <div className="flex flex-row gap-1">
            <p className="font-bold ">تاريخ البلاغ:</p>
            <p>{task.date.toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <p className="font-bold">اسم الخدمة:</p>
          <p>{task.serviceName}</p>
        </div>

        <div className="flex flex-row gap-1">
          <p className="font-bold">مصدر البلاغ:</p>
          <p>{task.sourceReport}</p>
        </div>

        <div className="pt-2">
          <p className="font-bold">تفاصيل البلاغ</p>
          <p>{task.description}</p>
        </div>
      </CardContent>
      <CardFooter className="gap-2 pt-2 justify-between  bg-primaryGreen  rounded-b-lg">
        <Select value={selectedStatus} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="اختر الحالة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="to-do">جديد</SelectItem>
            <SelectItem value="in-progress">قيد التنفيذ</SelectItem>
            <SelectItem value="done">تم الحل</SelectItem>
          </SelectContent>
        </Select>
        <Button
          onClick={handleDetailsClick}
          className=" bg-secondGreen text-white rounded-lg"
        >
          التفاصيل
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TesterTaskCard;
