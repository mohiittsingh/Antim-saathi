import { useWorkflow } from "@/context/WorkflowContext";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import StepIndicator from "@/components/workflow/StepIndicator";

const routeToStep = {
  "/workflow/religion": 1,
  "/workflow/hearse": 2,
  "/workflow/cremation": 3,
  "/workflow/materials": 4,
  "/workflow/priest": 5,
  "/workflow/invite": 6,
  "/workflow/qr-pass": 7,
  "/workflow/certificate": 8,
};

function WorkflowLayout() {
  const location = useLocation();
  const { workflowStep, goToStep, isGuidedMode } = useWorkflow();

  useEffect(() => {
    const step = routeToStep[location.pathname];
    if (step) {
      goToStep(step);
    }
  }, [location.pathname, goToStep]);

  return (
    <div className="mx-auto mt-4 max-w-5xl">
      <div className="mb-6 border-b border-[#E8E5DF] pb-4">
        <h2 className="text-[26px] text-[#5B3A29]">Guided Funeral Workflow</h2>
        <p className="mt-1 text-[15px] text-[#4B5563]">Structured assistance for dignified arrangements</p>
      </div>

      {isGuidedMode ? (
        <div className="mb-8">
          <StepIndicator currentStep={workflowStep} />
        </div>
      ) : null}

      <Outlet />
    </div>
  );
}

export default WorkflowLayout;
