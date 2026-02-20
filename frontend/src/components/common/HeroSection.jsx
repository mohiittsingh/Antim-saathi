import { motion } from "framer-motion";
import CalmButton from "@/components/common/CalmButton";

function HeroSection({ onGuided, onStandalone }) {
  return (
    <section className="relative overflow-hidden rounded-xl border border-[#EDE8DF] bg-[#F8F6F2] px-6 py-14 text-center shadow-sm md:px-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(217,119,6,0.08), rgba(248,246,242,0.9) 45%, #F8F6F2 80%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        <h1 className="text-[34px] leading-tight text-[#5B3A29] md:text-[36px]">
          Let us walk with you in the final journey.
        </h1>
        <p className="mt-4 text-[16px] text-[#4B5563]">
          Structured assistance for dignified arrangements.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CalmButton onClick={onGuided} className="h-10 px-5">
            Start Guided Assistance
          </CalmButton>
          <CalmButton onClick={onStandalone} className="h-10 border border-[#D97706] bg-white px-5 text-[#5B3A29] hover:bg-[#FFF7ED]">
            Book Transport
          </CalmButton>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
