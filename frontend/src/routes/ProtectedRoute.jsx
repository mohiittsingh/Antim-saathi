import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useWorkflow } from "@/context/WorkflowContext";

function ProtectedRoute({ mode, children }) {
  const { isGuidedMode } = useWorkflow();
  const location = useLocation();

  if (mode === "guided" && !isGuidedMode) {
    return <Navigate to="/workflow/hearse" replace state={{ from: location }} />;
  }

  if (mode === "standalone" && isGuidedMode) {
    return <Navigate to="/workflow/religion" replace state={{ from: location }} />;
  }

  return children || <Outlet />;
}

export default ProtectedRoute;
