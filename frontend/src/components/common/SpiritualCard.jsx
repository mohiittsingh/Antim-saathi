import { motion } from "framer-motion";

function SpiritualCard({ icon: Icon, title, description, onClick, cta = "Continue" }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className="w-full rounded-xl border border-[#E8E5DF] bg-white p-5 text-left shadow-sm transition hover:shadow-md"
    >
      {Icon ? (
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F1E6] text-[#5B3A29]">
          <Icon className="h-5 w-5" />
        </div>
      ) : null}

      <h3 className="text-[20px] text-[#5B3A29]">{title}</h3>
      <p className="mt-2 text-[15px] text-[#4B5563]">{description}</p>
      <p className="mt-4 text-[14px] text-[#D97706]">{cta}</p>
    </motion.button>
  );
}

export default SpiritualCard;
