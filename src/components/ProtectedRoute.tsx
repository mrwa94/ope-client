
import { Navigate } from 'react-router-dom';

// مكون ProtectedRoute للتحقق من حالة المستخدم
const ProtectedRoute = ({ children, isAuthenticated }: { children: JSX.Element; isAuthenticated: boolean }) => {
  if (!isAuthenticated) {
    // إذا لم يكن المستخدم مسجل دخول، قم بتوجيهه إلى صفحة تسجيل الدخول
    return <Navigate to="/" />;
  }

  return children; // إذا كان المستخدم مسجل دخول، يتم عرض المحتوى
};

export default ProtectedRoute;
