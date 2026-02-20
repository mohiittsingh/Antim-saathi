import { motion } from "framer-motion";
import celebrationImage from "@/assets/images/celebration.jpg";
import memorialPlanningImage from "@/assets/images/memorial_planning.jpg";
import sacredTripImage from "@/assets/images/sacred_trip.jpg";
import documentationSupportImage from "@/assets/images/documentation_support.jpg";

const services = [
  {
    id: "celebration",
    title: "Celebration of Life",
    description:
      "Curated remembrance ceremonies that honor a life story with graceful sequencing, family support, and calm coordination.",
    image: celebrationImage,
    layout: "lg:col-span-2",
    imageHeight: "h-64 md:h-72",
  },
  {
    id: "travel",
    title: "Sacred Ritual Travel",
    description:
      "Destination-led assistance for sacred journeys, ritual continuity, and on-ground coordination with respectful timing.",
    image: sacredTripImage,
    layout: "lg:row-span-2",
    imageHeight: "h-[24rem] md:h-[30rem]",
  },
  {
    id: "planning",
    title: "Memorial Planning",
    description:
      "Breathable, well-paced memorial planning for prayer flow, speaker order, and meaningful family remembrance.",
    image: memorialPlanningImage,
    layout: "",
    imageHeight: "h-52 md:h-56",
  },
  {
    id: "docs",
    title: "Documentation Support",
    description:
      "Stepwise support for certificates and essential formalities with transparent checklists and clear execution.",
    image: documentationSupportImage,
    layout: "lg:col-span-2",
    imageHeight: "h-52 md:h-56",
  },
];

function ServiceCard({ item, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`group overflow-hidden rounded-[32px] border border-white/20 bg-white/40 shadow-[0_14px_35px_-28px_rgba(26,26,26,0.35)] backdrop-blur-md ${item.layout}`}
    >
      <div className={`relative overflow-hidden ${item.imageHeight}`}>
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover grayscale transition-all group-hover:scale-[1.05] group-hover:grayscale-0"
          style={{ transitionDuration: "800ms" }}
        />
      </div>
      <div className="space-y-3 p-5 md:p-6">
        <h2 className="text-2xl font-bold text-[#1A1A1A] md:text-[1.75rem]" style={{ fontFamily: "\"Lora\", serif" }}>
          {item.title}
        </h2>
        <p className="text-[15px] leading-[1.75] text-[#374151]">{item.description}</p>
      </div>
    </motion.article>
  );
}

function QuoteTile({ children, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex min-h-[9rem] items-center justify-center rounded-[32px] px-4 text-center"
    >
      <p className="text-2xl italic leading-relaxed text-[#1A1A1A]" style={{ fontFamily: "\"Lora\", serif" }}>
        {children}
      </p>
    </motion.article>
  );
}

function ServicesPage() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F2]">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "linear-gradient(#8B6B4D 1px, transparent 1px), linear-gradient(90deg, #8B6B4D 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-bold text-[#1A1A1A] md:text-5xl" style={{ fontFamily: "\"Lora\", serif" }}>
            Premium Services with Human Warmth
          </h1>
          <p className="mt-4 text-base leading-[1.9] text-[#4B5563]">
            Designed for families who need structure, composure, and operational clarity through every final arrangement.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <ServiceCard item={services[0]} delay={0.04} />
          <QuoteTile delay={0.1}>Grief cannot be removed, but it can be shared.</QuoteTile>
          <ServiceCard item={services[1]} delay={0.16} />
          <ServiceCard item={services[2]} delay={0.22} />
          <ServiceCard item={services[3]} delay={0.28} />
          <QuoteTile delay={0.34}>Every farewell deserves dignity, warmth, and careful structure.</QuoteTile>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="rounded-[32px] border border-white/20 bg-white/40 p-7 shadow-[0_12px_30px_-24px_rgba(26,26,26,0.35)] backdrop-blur-md md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[#D97706]">Final Step</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#1A1A1A]" style={{ fontFamily: "\"Lora\", serif" }}>
                Connect With Us
              </h3>
              <div className="mt-4 grid gap-2 text-[15px] leading-[1.7] text-[#374151] md:grid-cols-3">
                <p><span className="font-semibold text-[#1A1A1A]">Name:</span> Mohit</p>
                <p><span className="font-semibold text-[#1A1A1A]">Email:</span> your@email.com</p>
                <p><span className="font-semibold text-[#1A1A1A]">Phone:</span> +91 XXXXX XXXXX</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
