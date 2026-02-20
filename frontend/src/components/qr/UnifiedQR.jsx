import { QRCodeSVG } from "qrcode.react";

function UnifiedQR({ value, size = 220 }) {
  return (
    <div className="inline-flex items-center justify-center rounded-xl border border-[#E8E5DF] bg-white p-4 shadow-sm">
      <QRCodeSVG value={value} size={size} includeMargin />
    </div>
  );
}

export default UnifiedQR;
