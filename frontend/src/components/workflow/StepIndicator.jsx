const steps = [
  { id: 1, label: "Tradition" },
  { id: 2, label: "Transport" },
  { id: 3, label: "Cremation" },
  { id: 4, label: "Materials" },
  { id: 5, label: "Priest" },
  { id: 6, label: "Invite" },
  { id: 7, label: "QR Pass" },
  { id: 8, label: "Certificate" },
];

function StepIndicator({ currentStep }) {
  return (
    <div className="rounded-xl border border-[#E6E2DA] bg-white p-4 shadow-sm">
      <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-[#EFEAE2]">
        <div
          className="h-full rounded-full bg-[#D97706] transition-all duration-500"
          style={{ width: `${Math.min(100, (currentStep / steps.length) * 100)}%` }}
        />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isComplete = currentStep > step.id;

          return (
            <div
              key={step.id}
              className={`rounded-lg border px-2 py-2 text-center text-[12px] ${
                isActive
                  ? "border-[#D7BA80] bg-[#FFF7ED] text-[#5B3A29]"
                  : isComplete
                    ? "border-[#E7D7BD] bg-[#FBF8F2] text-[#5B3A29]"
                    : "border-[#ECE8E1] bg-white text-[#6B7280]"
              }`}
            >
              {step.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepIndicator;
