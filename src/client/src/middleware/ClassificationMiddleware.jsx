import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const ClassificationMiddleware = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

    if (!token && !isAuthPage) {
      navigate("/login");
    }
  }, [navigate, location]);

  return children; 
};

export default ClassificationMiddleware;
