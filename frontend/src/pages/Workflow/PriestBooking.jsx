import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import RitualBadge from "@/components/workflow/RitualBadge";
import CalmButton from "@/components/common/CalmButton";
import { useWorkflow } from "@/context/WorkflowContext";

function PriestBooking() {
  const navigate = useNavigate();
  const { setPriest, goToNextStep, isGuidedMode } = useWorkflow();
  const [language, setLanguage] = useState("Hindi");
  const [ritualType, setRitualType] = useState("Antyesti");

  const priests = useMemo(
    () => [
      {
        id: "priest-1",
        name: "Pandit Vishal Sharma",
        experience: 18,
        languages: ["Hindi", "Sanskrit", "English"],
        tags: ["Antyesti", "Asthi Visarjan", "Shraddha"],
        fee: "INR 4,500",
      },
      {
        id: "priest-2",
        name: "Acharya Raghav Trivedi",
        experience: 12,
        languages: ["Hindi", "Gujarati"],
        tags: ["Antyesti", "Prayer Meet"],
        fee: "INR 3,900",
      },
    ],
    []
  );

  const filtered = priests.filter(
    (priest) =>
      priest.languages.includes(language) &&
      priest.tags.some((tag) => tag.toLowerCase().includes(ritualType.toLowerCase()))
  );

  const handleBook = (priest) => {
    setPriest({ ...priest, selectedLanguage: language, selectedRitual: ritualType });

    if (isGuidedMode) {
      goToNextStep();
    }

    navigate("/workflow/invite");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-[24px] text-[#5B3A29]">Book Ritual Priest</h3>

      <div className="grid gap-3 rounded-xl border border-[#E6E2DA] bg-white p-4 shadow-sm md:grid-cols-2">
        <label className="text-[14px] text-[#374151]">
          Language
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className="mt-1 h-10 w-full rounded-lg border border-[#E5E7EB] px-3"
          >
            <option>Hindi</option>
            <option>Sanskrit</option>
            <option>English</option>
            <option>Gujarati</option>
          </select>
        </label>

        <label className="text-[14px] text-[#374151]">
          Ritual Type
          <select
            value={ritualType}
            onChange={(event) => setRitualType(event.target.value)}
            className="mt-1 h-10 w-full rounded-lg border border-[#E5E7EB] px-3"
          >
            <option>Antyesti</option>
            <option>Shraddha</option>
            <option>Prayer</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4">
        {filtered.map((priest) => (
          <div key={priest.id} className="rounded-xl border border-[#E6E2DA] bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="grid gap-4 md:grid-cols-[84px_1fr]">
              <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-[#E8E5DF] bg-[#F6F4EF] text-[22px] text-[#5B3A29]">
                {priest.name.split(" ")[1]?.charAt(0) || "P"}
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-[18px] text-[#5B3A29]">{priest.name}</h4>
                  <p className="text-[14px] text-[#374151]">{priest.fee}</p>
                </div>
                <p className="mt-2 text-[14px] text-[#4B5563]">Experience: {priest.experience} years</p>
                <p className="text-[14px] text-[#4B5563]">Languages: {priest.languages.join(", ")}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {priest.tags.map((tag) => (
                    <RitualBadge key={tag}>{tag}</RitualBadge>
                  ))}
                </div>

                <div className="mt-4 flex justify-end">
                  <CalmButton className="h-9 px-4" onClick={() => handleBook(priest)}>Book</CalmButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriestBooking;
