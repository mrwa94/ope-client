import  { useState } from "react";
import TesterTaskCard from "./tester/cards/TesterTaskCard";
import { taskData } from "@/mock/data";

const KanbanBoard = () => {
  // mock up the data
  const [tasks, setTasks] = useState(taskData);

  // تصنيف المهام حسب الحالة
  const taskColumns = {
    "to-do": tasks.filter((task) => task.status === "to-do"),
    "in-progress": tasks.filter((task) => task.status === "in-progress"),
    "done": tasks.filter((task) => task.status === "done"),
  };
  // دالة لتحديث حالة المهمة
  const updateTaskStatus = (taskId: string, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="flex gap-6 min-h-full ">
      {/* "To Do" */}
      <div className="flex-1 p-4 rounded-lg shadow-lg ">
        <h3 className="text-xl font-semibold text-center mb-6 sticky top-0 bg-gray-00 ">جديد</h3>
        <div className="space-y-4  overflow-y-auto">
          {taskColumns["to-do"].map((task) => (
            <TesterTaskCard key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
          ))}
        </div>
      </div>

      {/* "In Progress" */}
      <div className="flex-1  p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-center text-gray-700 mb-6 sticky top-0 ">قيد التنفيذ</h3>
        <div className="space-y-4  overflow-y-auto">
          {taskColumns["in-progress"].map((task) => (
            <TesterTaskCard key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
          ))}
        </div>
      </div>

      {/* "Done" */}
      <div className="flex-1  p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-center text-gray-700 mb-6 sticky top-0 ">تم التنفيذ</h3>
        <div className="space-y-4  overflow-y-auto">
          {taskColumns["done"].map((task) => (
            <TesterTaskCard key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;