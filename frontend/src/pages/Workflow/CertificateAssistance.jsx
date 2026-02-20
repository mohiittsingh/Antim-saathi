import { useState } from "react";
import CalmButton from "@/components/common/CalmButton";

function CertificateAssistance() {
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    deceasedName: "",
    age: "",
    placeOfDeath: "",
    dateOfDeath: "",
  });
  const [toast, setToast] = useState("");

  const onUpload = (file) => {
    if (!file) return;

    setFileName(file.name);
    setForm({
      deceasedName: "Shri Mahesh Sharma",
      age: "74",
      placeOfDeath: "St. Joseph Hospital, Ghaziabad",
      dateOfDeath: "2026-02-18",
    });
  };

  const onSubmit = () => {
    setToast("Certificate application submitted successfully.");
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <div className="space-y-5">
      <h3 className="text-[24px] text-[#5B3A29]">Certificate Assistance</h3>

      <div className="rounded-xl border border-[#D9DCE3] bg-white p-5 shadow-sm">
        <label className="text-[14px] text-[#374151]">
          Upload Death Slip
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(event) => onUpload(event.target.files?.[0])}
            className="mt-2 block w-full rounded-lg border border-[#E5E7EB] p-2"
          />
        </label>
        {fileName ? <p className="mt-2 text-[13px] text-[#4B5563]">Uploaded: {fileName}</p> : null}
      </div>

      <div className="rounded-xl border border-[#D9DCE3] bg-white p-5 shadow-sm">
        <h4 className="text-[18px] text-[#5B3A29]">Autofilled Application (Editable)</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            ["deceasedName", "Deceased Name", "text"],
            ["age", "Age", "number"],
            ["placeOfDeath", "Place of Death", "text"],
            ["dateOfDeath", "Date of Death", "date"],
          ].map(([key, label, type]) => (
            <label key={key} className="text-[14px] text-[#374151]">
              {label}
              <input
                type={type}
                value={form[key]}
                onChange={(event) => setForm((prev) => ({ ...prev, [key]: event.target.value }))}
                className="mt-1 h-10 w-full rounded-lg border border-[#E5E7EB] px-3"
              />
            </label>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <CalmButton className="h-10" onClick={onSubmit}>Submit Certificate Request</CalmButton>
        </div>
      </div>

      {toast ? (
        <div className="rounded-xl border border-[#D7E7D2] bg-[#F2FBEE] px-4 py-3 text-[14px] text-[#2F6B2E]">
          {toast}
        </div>
      ) : null}
    </div>
  );
}

export default CertificateAssistance;
