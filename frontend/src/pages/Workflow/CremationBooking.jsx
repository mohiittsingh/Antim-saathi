import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialsMarketplace from "@/components/common/MaterialsMarketplace";
import SlotSelector from "@/components/workflow/SlotSelector";
import CalmButton from "@/components/common/CalmButton";
import { useWorkflow } from "@/context/WorkflowContext";

const slots = [
  { label: "10:00 AM", disabled: false },
  { label: "11:30 AM", disabled: false },
  { label: "01:00 PM", disabled: true },
  { label: "03:30 PM", disabled: false },
  { label: "05:00 PM", disabled: false },
];

function CremationBooking() {
  const navigate = useNavigate();
  const { setCremation, setMaterials, goToNextStep, isGuidedMode } = useWorkflow();
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");
  const [selectedType, setSelectedType] = useState("Electric");

  const facilities = useMemo(
    () => [
      {
        id: "ghaziabad-municipal-01",
        name: "Moksha Dham Civic Crematorium",
        authority: "Ghaziabad Municipal Authority",
        distance: "6.2 km",
        available: 4,
        total: 12,
        nextSlot: "11:30 AM",
        wait: "45 min",
      },
      {
        id: "city-riverfront-02",
        name: "Riverfront Electric Cremation Centre",
        authority: "City Urban Services Board",
        distance: "8.9 km",
        available: 6,
        total: 14,
        nextSlot: "01:00 PM",
        wait: "30 min",
      },
    ],
    []
  );

  const handleContinue = () => {
    if (!selectedFacility) return;

    setCremation({ ...selectedFacility, cremationType: selectedType, slot: selectedSlot });

    if (isGuidedMode) {
      goToNextStep();
    }

    navigate(selectedType === "Wood" ? "/workflow/materials" : "/workflow/priest");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-[24px] text-[#5B3A29]">Reserve Cremation Facility</h3>

      <div className="inline-flex rounded-xl border border-[#E8E5DF] bg-[#FAF8F4] p-1">
        {["Electric", "Wood"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setSelectedType(type)}
            className={`rounded-lg px-4 py-2 text-[14px] ${selectedType === type ? "bg-[#FFF4E7] text-[#5B3A29]" : "text-[#4B5563]"}`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {facilities.map((facility) => {
          const percent = (facility.available / facility.total) * 100;
          const active = selectedFacility?.id === facility.id;

          return (
            <div key={facility.id} className={`rounded-xl border bg-white p-4 shadow-sm ${active ? "border-[#D7BA80]" : "border-[#E6E2DA]"}`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-[18px] text-[#5B3A29]">{facility.name}</h4>
                  <p className="text-[14px] text-[#4B5563]">{facility.authority}</p>
                </div>
                <span className="rounded-full border border-[#E5E7EB] px-2 py-1 text-[12px] text-[#4B5563]">{facility.distance}</span>
              </div>

              <p className="mt-3 text-[14px] text-[#4B5563]">Available Pyres: {facility.available} / {facility.total}</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#EEEAE2]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-[#D97706]"
                />
              </div>

              <div className="mt-3 grid gap-2 text-[14px] text-[#4B5563] sm:grid-cols-2">
                <p>Next available slot: {facility.nextSlot}</p>
                <p>Average wait time: {facility.wait}</p>
              </div>

              <div className="mt-3">
                <p className="mb-2 text-[14px] text-[#374151]">Select slot</p>
                <SlotSelector slots={slots} selectedSlot={selectedSlot} onSelect={(slot) => {
                  setSelectedFacility(facility);
                  setSelectedSlot(slot);
                }} />
              </div>
            </div>
          );
        })}
      </div>

      {selectedType === "Wood" ? (
        <div className="rounded-xl border border-[#E8E5DF] bg-white p-4 shadow-sm">
          <h4 className="mb-3 text-[18px] text-[#5B3A29]">Cremation Woods + Materials Marketplace</h4>
          <MaterialsMarketplace onUpdate={setMaterials} />
        </div>
      ) : null}

      <div className="flex justify-end">
        <CalmButton onClick={handleContinue} className="h-10" disabled={!selectedFacility}>
          Select & Continue
        </CalmButton>
      </div>
    </div>
  );
}

export default CremationBooking;
