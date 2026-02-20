import { Dot } from "lucide-react";

function SectionDivider() {
  return (
    <div className="my-8 flex items-center justify-center">
      <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-[#D7BA80] to-[#D7BA80]/50" />
      <Dot className="mx-3 h-4 w-4 text-[#B08968]" />
      <div className="h-px w-1/3 bg-gradient-to-l from-transparent via-[#D7BA80] to-[#D7BA80]/50" />
    </div>
  );
}

export default SectionDivider;
