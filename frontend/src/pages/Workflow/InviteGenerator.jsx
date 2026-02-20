import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import InviteForm from "@/components/invite/InviteForm";
import InvitePreview from "@/components/invite/InvitePreview";
import CalmButton from "@/components/common/CalmButton";
import { useWorkflow } from "@/context/WorkflowContext";

function InviteGenerator() {
  const previewRef = useRef(null);
  const navigate = useNavigate();
  const { inviteData, setInviteData, goToNextStep, isGuidedMode } = useWorkflow();

  const downloadPdf = async () => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, { scale: 2, backgroundColor: "#ffffff" });
    const imgData = canvas.toDataURL("image/png");

    const doc = new jsPDF({ orientation: "portrait", unit: "px", format: [canvas.width, canvas.height] });
    doc.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    doc.save("antim-saathi-invite.pdf");
  };

  const shareInvite = async () => {
    const shareText = `Memorial invite for ${inviteData.deceasedName || "our loved one"}`;

    if (navigator.share) {
      await navigator.share({ title: "Antim Saathi Invite", text: shareText });
      return;
    }

    await navigator.clipboard.writeText(shareText);
  };

  const handleContinue = () => {
    if (isGuidedMode) {
      goToNextStep();
    }
    navigate("/workflow/qr-pass");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-[24px] text-[#5B3A29]">Invitation Generator</h3>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-[#E6E2DA] bg-white p-4 shadow-sm">
          <InviteForm form={inviteData} onChange={setInviteData} />
          <div className="mt-4 flex flex-wrap gap-2">
            <CalmButton className="h-9 px-4" onClick={downloadPdf}>Download PDF</CalmButton>
            <CalmButton className="h-9 border border-[#D97706] bg-white px-4 text-[#5B3A29] hover:bg-[#FFF7ED]" onClick={shareInvite}>
              Share Invite
            </CalmButton>
          </div>
        </div>

        <div ref={previewRef}>
          <InvitePreview form={inviteData} />
        </div>
      </div>

      <div className="flex justify-end">
        <CalmButton className="h-10" onClick={handleContinue}>Continue to Unified QR Pass</CalmButton>
      </div>
    </div>
  );
}

export default InviteGenerator;
