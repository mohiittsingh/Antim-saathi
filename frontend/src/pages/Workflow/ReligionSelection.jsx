import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useWorkflow } from "@/context/WorkflowContext";

const religions = ["Hindu", "Muslim", "Sikh", "Christian", "Buddhist", "Other"];

function ReligionSelection() {
  const { setReligion, goToNextStep } = useWorkflow();
  const navigate = useNavigate();

  const handleSelect = (religion) => {
    setReligion(religion);
    goToNextStep();
    navigate("/workflow/hearse");
  };

  return (
    <div>
      <h3 className="mb-5 text-[24px] text-[#5B3A29]">Select Religious Tradition</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {religions.map((religion) => (
          <motion.button
            key={religion}
            type="button"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleSelect(religion)}
            className="rounded-xl border border-[#E8E5DF] bg-white p-5 text-center text-[15px] text-[#374151] shadow-sm hover:shadow-md"
          >
            {religion}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default ReligionSelection;
