function SlotSelector({ slots, selectedSlot, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {slots.map((slot) => (
        <button
          key={slot.label}
          type="button"
          disabled={slot.disabled}
          onClick={() => onSelect(slot.label)}
          className={`rounded-lg border px-3 py-1.5 text-[13px] transition ${
            slot.disabled
              ? "cursor-not-allowed border-[#E5E7EB] bg-[#F9FAFB] text-[#9CA3AF]"
              : selectedSlot === slot.label
                ? "border-[#D97706] text-[#5B3A29]"
                : "border-[#E5E7EB] text-[#4B5563] hover:border-[#D7BA80]"
          }`}
        >
          {slot.label}
        </button>
      ))}
    </div>
  );
}

export default SlotSelector;
