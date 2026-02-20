import { useNavigate } from "react-router-dom";
import MaterialsMarketplace from "@/components/common/MaterialsMarketplace";
import { useWorkflow } from "@/context/WorkflowContext";
import CalmButton from "@/components/common/CalmButton";

function MaterialsSelection() {
  const navigate = useNavigate();
  const { setMaterials, goToNextStep, isGuidedMode } = useWorkflow();

  const handleContinue = () => {
    if (isGuidedMode) {
      goToNextStep();
    }
    navigate("/workflow/priest");
  };

  return (
    <div className="space-y-5">
      <h3 className="text-[24px] text-[#5B3A29]">Cremation Materials Marketplace</h3>
      <MaterialsMarketplace onUpdate={setMaterials} />
      <div className="flex justify-end">
        <CalmButton onClick={handleContinue} className="h-10">Continue to Priest Booking</CalmButton>
      </div>
    </div>
  );
}

export default MaterialsSelection;
