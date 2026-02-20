function InviteForm({ form, onChange }) {
  const fields = [
    ["deceasedName", "Deceased Name", "text"],
    ["dob", "Date of Birth", "date"],
    ["deathDate", "Date of Passing", "date"],
    ["ceremonyDate", "Ceremony Date", "date"],
    ["ceremonyTime", "Ceremony Time", "time"],
    ["ceremonyLocation", "Ceremony Location", "text"],
    ["contactPerson", "Contact Person", "text"],
    ["contactPhone", "Contact Number", "tel"],
  ];

  return (
    <div className="grid gap-3">
      {fields.map(([key, label, type]) => (
        <label key={key} className="text-[14px] text-[#374151]">
          {label}
          <input
            type={type}
            value={form[key] || ""}
            onChange={(event) => onChange({ [key]: event.target.value })}
            className="mt-1 h-10 w-full rounded-lg border border-[#E5E7EB] px-3"
          />
        </label>
      ))}

      <label className="text-[14px] text-[#374151]">
        Donation QR
        <select
          value={form.donationQrType || "none"}
          onChange={(event) => onChange({ donationQrType: event.target.value })}
          className="mt-1 h-10 w-full rounded-lg border border-[#E5E7EB] px-3"
        >
          <option value="none">No Donation QR</option>
          <option value="temple">Temple Trust</option>
          <option value="charity">Local Charity</option>
        </select>
      </label>
    </div>
  );
}

export default InviteForm;
