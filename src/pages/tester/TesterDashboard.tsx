import {
  BugOff,
  ListTodo,
  SquareMenu,
  SquarePen,
  LogOutIcon,
} from "lucide-react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import CompanyLogo from "../../assets/images/amanaLogo.svg"



import CreateBug from "./CreateBug";
import ServicesOverview from "./ServicesOverview";
import { Button } from "@/components/ui/button";
import KanbanBoard from "@/components/KanbanBoard";
import ReportDetails from "./ReportDetails";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";

import TestingRequests from "./TestingRequests";

const TesterDashboard = () => {
  const navigate = useNavigate();
  // const tasks = useSelector((state: RootState) => state.tasks.tasks);
  // const requests = useSelector((state: RootState) => state.requests.requests);



  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <Sidebar className="bg-[#004D46] text-black fixed top-0 left-0 h-full">
        <div className="m-5">
          <div className="flex flex-col items-center space-x-2">
            <img
              src={logo}
              alt="مروة الصبحي"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h4 className="text-lg font-bold">مروة الصبحي</h4>
              <p>مختبر برمجيات</p>
            </div>
            <hr className="border-gray-400 w-full" />
          </div>
        </div>

        <Menu>
          <MenuItem
            icon={<ListTodo />}
            onClick={() => navigate("/tester/track-reports")}
          >
            متابعة البلاغات
          </MenuItem>
          <MenuItem
            icon={<BugOff />}
            onClick={() => navigate("/tester/testing-requests")}
          >
            طلبات الاختبار
          </MenuItem>
          <MenuItem
            icon={<SquarePen />}
            onClick={() => navigate("/tester/create-bug")}
          >
            إضافة خطأ (Bug)
          </MenuItem>
          <MenuItem
            icon={<SquareMenu />}
            onClick={() => navigate("/tester/services-overview")}
          >
            قائمة الخدمات
          </MenuItem>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <Button className="bg-gray-800 w-full text-white py-2 flex items-center justify-center space-x-2">
              <LogOutIcon className="text-white" />
              <span>تسجيل الخروج</span>
            </Button>
          </div>
        </Menu>
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1    overflow-y-auto h-screen">
          <div className=" bg-primaryGreen   flex justify-center">
           <img src = {CompanyLogo} alt = "شعار الامانة" width={150}/>
          </div>
        <Routes>
          <Route path="/tester/track-reports" element={
             <KanbanBoard
            // تمرير مكون المهام
           />
          } />
          
          <Route
            path="/tester/testing-requests"
            element={<TestingRequests />// تمرير مكون المهام
            }
          />
          <Route path="/tester/create-bug" element={<CreateBug />} />
          <Route
            path="/tester/services-overview"
            element={<ServicesOverview />}
          />
          <Route path="/tester" element={<ServicesOverview />} />{" "}
          <Route path="/report-details" element={<ReportDetails />} />
          {/* المسار الافتراضي */}
        </Routes>
      </main>
    </div>
  );
};

export default TesterDashboard;
