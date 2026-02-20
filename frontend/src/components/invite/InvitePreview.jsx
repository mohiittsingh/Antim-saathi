import UnifiedQR from "@/components/qr/UnifiedQR";

function InvitePreview({ form }) {
  return (
    <div className="rounded-xl border border-[#E6E2DA] bg-[#FFFCF8] p-6 shadow-sm">
      <p className="text-center text-[13px] uppercase tracking-wider text-[#8B6B54]">In Loving Memory</p>
      <h4 className="mt-2 text-center text-[26px] text-[#5B3A29]">{form.deceasedName || "Name of Departed Soul"}</h4>

      <div className="mt-4 space-y-1 text-center text-[14px] text-[#4B5563]">
        <p>DOB: {form.dob || "-"}</p>
        <p>Date of Passing: {form.deathDate || "-"}</p>
        <p>Ceremony: {form.ceremonyDate || "-"} • {form.ceremonyTime || "-"}</p>
        <p>Location: {form.ceremonyLocation || "-"}</p>
        <p>Contact: {form.contactPerson || "-"} {form.contactPhone ? `(${form.contactPhone})` : ""}</p>
      </div>

      <div className="mt-4 flex justify-center">
        <UnifiedQR value={`INVITE:${form.deceasedName}|${form.ceremonyDate}|${form.ceremonyLocation}`} size={130} />
      </div>
    </div>
  );
}

export default InvitePreview;
