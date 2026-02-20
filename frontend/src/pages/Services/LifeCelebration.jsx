import { motion } from "framer-motion";

const lifeImage =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80";

function LifeCelebration() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-[#ECE8E1] bg-white p-5 shadow-sm md:p-7"
    >
      <div className="group overflow-hidden rounded-xl">
        <img
          src={lifeImage}
          alt="Family gathering in remembrance"
          className="h-[280px] w-full rounded-xl object-cover shadow-sm transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-[#5B3A29]">Celebration of a Life Well Lived</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#4B5563]">
        For families who wish to honor a long and fulfilled life with dignity and grace.
      </p>
      <button
        type="button"
        className="mt-5 rounded-full border border-[#D97706] px-5 py-2 text-sm font-medium text-[#D97706] transition-colors duration-300 hover:bg-[#FFF7ED]"
      >
        Learn More
      </button>
    </motion.section>
  );
}

export default LifeCelebration;
