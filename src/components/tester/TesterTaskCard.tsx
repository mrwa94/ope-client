import {useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { Task } from "@/types/type";





const TesterTaskCard = ({ task, updateTaskStatus }: { task: Task, updateTaskStatus: (id: string, status: string) => void }) => {
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
    <Card className="w-[300px] shadow-md">
      <CardHeader>
        <Label className="font-bold">عنوان البلاغ:</Label>
        <p>{task.title} </p>
        <div>
          <Label className="font-bold">تاريخ البلاغ:</Label>
          <Label>{task.date.toLocaleDateString()}</Label>
        </div>
        <div>
          <Label className="font-bold">حالة البلاغ:</Label>
          <Label
            style={{
              backgroundColor: task.priority.color,
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            {task.priority.name}
          </Label>
        </div>
      </CardHeader>
      <CardContent>
        <div className="">
          <Label className="font-bold">رقم البلاغ:</Label>
          <Label>{task.numberReported}</Label>
        </div>
        <div className="">
          <Label className="font-bold">مصدر البلاغ:</Label>
          <Label>{task.sourceReport}</Label>
        </div>
        <div className="">
          <Label className="font-bold">اسم الخدمة:</Label>
          <Label>{task.serviceName}</Label>
        </div>
        <div className="pt-2">
          <Label className="font-bold">تفاصيل البلاغ</Label>
          <p>{task.description}</p>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Select value={selectedStatus} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="اختر الحالة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="to-do">جديد</SelectItem>
            <SelectItem value="in-progress">قيد التنفيذ</SelectItem>
            <SelectItem value="done">تم الحل</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleDetailsClick} className="bg-[#58938D] rounded-lg">التفاصيل</Button>
      </CardFooter>
    </Card>
  );
};

export default TesterTaskCard;
