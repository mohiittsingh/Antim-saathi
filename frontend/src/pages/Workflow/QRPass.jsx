import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CalmButton from "@/components/common/CalmButton";
import UnifiedQR from "@/components/qr/UnifiedQR";
import { useWorkflow } from "@/context/WorkflowContext";

function QRPass() {
  const passRef = useRef(null);
  const navigate = useNavigate();
  const {
    selectedReligion,
    hearseSelection,
    cremationSelection,
    priestSelection,
    inviteData,
    goToNextStep,
    isGuidedMode,
  } = useWorkflow();

  const qrValue = JSON.stringify({
    religion: selectedReligion,
    hearse: hearseSelection?.name,
    cremation: cremationSelection?.name,
    priest: priestSelection?.name,
    deceased: inviteData.deceasedName,
  });

  const downloadPass = async () => {
    if (!passRef.current) return;

    const canvas = await html2canvas(passRef.current, { scale: 2, backgroundColor: "#ffffff" });
    const imgData = canvas.toDataURL("image/png");

    const doc = new jsPDF({ orientation: "portrait", unit: "px", format: [canvas.width, canvas.height] });
    doc.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    doc.save("antim-saathi-pass.pdf");
  };

  const shareLink = async () => {
    const link = window.location.href;

    if (navigator.share) {
      await navigator.share({ title: "Antim Saathi Unified Pass", url: link });
      return;
    }

    await navigator.clipboard.writeText(link);
  };

  const continueFlow = () => {
    if (isGuidedMode) {
      goToNextStep();
    }
    navigate("/workflow/certificate");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-[24px] text-[#5B3A29]">Unified QR Pass</h3>

      <div ref={passRef} className="rounded-xl border border-[#E6E2DA] bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-[20px] text-[#5B3A29]">Booking Summary</h4>
            <div className="mt-3 space-y-2 text-[14px] text-[#4B5563]">
              <p>Religion: {selectedReligion || "-"}</p>
              <p>Hearse: {hearseSelection?.name || "-"}</p>
              <p>Cremation: {cremationSelection?.name || "-"}</p>
              <p>Priest: {priestSelection?.name || "-"}</p>
              <p>Deceased: {inviteData.deceasedName || "-"}</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <UnifiedQR value={qrValue} size={220} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-2">
        <CalmButton className="h-9 px-4" onClick={downloadPass}>Download Pass</CalmButton>
        <CalmButton className="h-9 border border-[#D97706] bg-white px-4 text-[#5B3A29] hover:bg-[#FFF7ED]" onClick={shareLink}>
          Share Link
        </CalmButton>
        <CalmButton className="h-9 px-4" onClick={continueFlow}>Continue</CalmButton>
      </div>
    </div>
  );
}

export default QRPass;
