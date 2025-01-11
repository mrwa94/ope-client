import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IssueCategory } from "@/types/type";

import { Download } from "lucide-react";
import { useState } from "react";

import { useLocation } from "react-router-dom";

const ReportDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("id");

  const [notes, setNotes] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
  };

  const [selectedStatus, setSelectedStatus] = useState(true);

  const handleStatusChange = () => {
    setSelectedStatus(true);
    // updateTaskStatus(task.id, value); // تحديث حالة المهمة في اللوحة الأم (KanbanBoard)
  };



  return (
    <div>
      <div className=" h-full m-9 p-9 bg-white rounded-lg">
        <p className="text-2xl font-bold">تفاصيل البلاغ رقم {taskId}</p>
        <div className="flex flex-row gap-3 p-5  h-60 justify-between">
          card details .
          <Button className=" bg-secondGreen rounded-lg">
            تحميل المرفقات
            <Download />
          </Button>
        </div>
        <div>
          <form className="space-y-4 p-4">
            <label htmlFor="notes" className="text-lg font-semibold">
              كتابة الملاحظات
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              cols={50}
              value={notes}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="اكتب ملاحظاتك هنا..."
            />
            <div className="w-full p-2 border border-gray-300 rounded-md ">
              <h3 className="text-lg font-semibold">اجراءات المختبر </h3>
              <div className="flex flex-row  gap-20 p-3 ">
                {/* procedure type */}
                < div>
                  
                  <p>تصنيف الخطأ</p>
                  <Select value="Gis" onValueChange={handleStatusChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="اختر التصنيف" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(IssueCategory).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                </div>


                {/* statue */}
                <div className=" border-secondGreen">
                  <p>الحالة</p>
                  <Select
                    value="قيد التنفيذ"
                    onValueChange={handleStatusChange}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="to-do">جديد</SelectItem>
                      <SelectItem value="in-progress">قيد التنفيذ</SelectItem>
                      <SelectItem value="done">تم الحل</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className=" pt-5   ">
                  <button
                    type="submit"
                    className=" bg-secondGreen text-white py-2 px-4 rounded-lg "
                  >
                    تحديث
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
