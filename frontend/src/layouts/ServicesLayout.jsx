import { Outlet } from "react-router-dom";
import AnimatedWrapper from "@/components/common/AnimatedWrapper";

function ServicesLayout() {
  return (
    <AnimatedWrapper className="space-y-4">
      <h2 className="text-[26px] text-[#5B3A29]">Companion Services</h2>
      <p className="text-[15px] text-[#4B5563]">Auxiliary services designed for dignity and remembrance.</p>
      <Outlet />
    </AnimatedWrapper>
  );
}

export default ServicesLayout;
