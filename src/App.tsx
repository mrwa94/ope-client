
import { BrowserRouter as Router } from "react-router-dom";
// import Login from "./pages/auth/Login";
import TesterDashboard from "./pages/tester/TesterDashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
// import AdminTesterDashboard from "./pages/adminTester/AdminTesterDashboard";

const App = () => {
  //const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <Router>
     <TesterDashboard/>
    </Router>
  );
};

export default App;
