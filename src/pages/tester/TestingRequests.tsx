import { useState } from "react";


import TesterRequestCard from "@/components/tester/cards/TestingRequestsCard";
import { RequestTasksData } from "@/mock/data";


const TestingRequests = () => {
  const [request, setRequest] = useState(RequestTasksData);
  // تصنيف المهام حسب الحالة
  const taskColumns = {
    "to-do": request.filter((RequestTask) => RequestTask.status === "to-do"),
    "in-progress": request.filter((RequestTask) => RequestTask.status === "in-progress"),
    "done": request.filter((RequestTask) => RequestTask.status === "done"),
  };
  // دالة لتحديث حالة المهمة
  const updateTaskStatus = (taskId: string, newStatus: string) => {
    setRequest((prevRequest) =>
      prevRequest.map((prevRequest) =>
        prevRequest.id === taskId ? { ...prevRequest, status: newStatus } : prevRequest
      )
    );
  };
  return (
    <div className="flex gap-6 min-h-full ">
      {/* "To Do" */}
      <div className="flex-1 bg-gray-300 p-4 rounded-lg shadow-lg ">
        <h3 className="text-xl font-semibold text-center mb-6  top-0 bg-gray-00 bg-white ">جديد</h3>
        <div className="space-y-4  overflow-y-auto">
          {taskColumns["to-do"].map((request) => (
          <TesterRequestCard key={request.id} requestTasks={request} updateTaskStatus={updateTaskStatus}/>
          ))}
        </div>
      </div>

      {/* "In Progress" */}
      <div className="flex-1 bg-yellow-50 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-center  mb-6  top-0  bg-white ">قيد التنفيذ</h3>
        <div className="space-y-4  overflow-y-auto">
          {taskColumns["in-progress"].map((request) => (
          <TesterRequestCard key={request.id} requestTasks={request} updateTaskStatus={updateTaskStatus}/>
        ))}
        </div>
      </div>

      {/* "Done" */}
      <div className="flex-1 bg-green-100 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-center  mb-6  top-0  bg-white ">تم التنفيذ</h3>
        <div className="space-y-4  overflow-y-auto">
          {taskColumns["done"].map((request) => (
          <TesterRequestCard key={request.id} requestTasks={request} updateTaskStatus={updateTaskStatus}/>
        ))}
        </div>
      </div>
    </div>


  )
}

export default TestingRequests