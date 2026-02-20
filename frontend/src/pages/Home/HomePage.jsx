import { motion } from "framer-motion";
import { FileText, Flame, Truck, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useWorkflow } from "@/context/WorkflowContext";
import brandLogo from "@/assets/images/antim-saathi-logo.jpeg";

const headlineLines = ["DIGNIFIED CARE", "IN EVERY", "FINAL STEP"];

const quickActions = [
  {
    title: "Book Hearse Transport",
    description: "Arrange verified hearse transport with clear dispatch support.",
    icon: Truck,
    route: "/workflow/hearse",
    guided: false,
  },
  {
    title: "Book Cremation Facility",
    description: "Reserve cremation slots with structured assistance and timing.",
    icon: Flame,
    route: "/workflow/cremation",
    guided: false,
  },
  {
    title: "Book Priest / Ritual Guide",
    description: "Connect with experienced ritual guides based on tradition and language.",
    icon: UserRound,
    route: "/workflow/priest",
    guided: false,
  },
  {
    title: "Documentation Support",
    description: "Follow guided steps for certificates and essential formal documentation.",
    icon: FileText,
    route: "/workflow/religion",
    guided: true,
  },
];

function HomePage() {
  const navigate = useNavigate();
  const { setGuidedMode } = useWorkflow();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const mandalaBackground = useMemo(
    () => "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='440' viewBox='0 0 440 440'%3E%3Cg fill='none' stroke='%239E6B4E' stroke-opacity='0.32'%3E%3Ccircle cx='220' cy='220' r='65'/%3E%3Ccircle cx='220' cy='220' r='105'/%3E%3Ccircle cx='220' cy='220' r='145'/%3E%3Ccircle cx='220' cy='220' r='185'/%3E%3Cpath d='M220 26v388M26 220h388M95 95l250 250M95 345L345 95'/%3E%3C/g%3E%3C/svg%3E\")",
    [],
  );

  const goGuided = () => {
    setGuidedMode(true);
    navigate("/workflow/religion");
  };

  const goServices = () => {
    setGuidedMode(false);
    navigate("/services");
  };

  const handleLogoMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleActionClick = (item) => {
    setGuidedMode(item.guided);
    navigate(item.route);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden bg-[#F8F5F0]"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-0 top-0 h-full w-[56%] opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#7A4A4A 1px, transparent 1px), linear-gradient(90deg, #7A4A4A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -right-24 top-12 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(217,119,6,0.25),_rgba(217,119,6,0)_68%)] blur-2xl" />
        <div
          className="absolute -bottom-28 right-16 h-[24rem] w-[24rem] opacity-[0.05]"
          style={{ backgroundImage: mandalaBackground, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
        />
      </div>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-14 px-6 py-24 md:px-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-5 text-[clamp(1.25rem,2.5vw,1.9rem)] tracking-[0.08em] text-[#7A3F3F]"
            style={{ fontFamily: "\"Noto Serif Devanagari\", \"Mukta\", serif" }}
          >
            अंतिम साथी
          </motion.p>

          <div className="space-y-1">
            {headlineLines.map((line, index) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 + index * 0.12 }}
                className="text-[clamp(2.25rem,6.8vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight text-[#1F2937]"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.5 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#4B5563] lg:mx-0"
          >
            A guided platform for funeral transport, cremation, burial, and ritual services - for every tradition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.65 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row lg:justify-start"
          >
            <button
              type="button"
              onClick={goGuided}
              className="rounded-full bg-[#D97706] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Start Guided Flow
            </button>
            <button
              type="button"
              onClick={goServices}
              className="rounded-full border border-[#D97706] px-8 py-3 text-sm font-semibold text-[#D97706] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D97706]/10"
            >
              Explore Services
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.25 }}
          className="mx-auto w-full max-w-[32rem]"
        >
          <div className="group relative" onMouseMove={handleLogoMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.2rem] bg-[radial-gradient(circle,_rgba(217,119,6,0.2),_rgba(217,119,6,0)_70%)] opacity-20" />
            <motion.div
              style={{ perspective: 1000 }}
              animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: 1.02 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-[#E8DCC8] bg-gradient-to-br from-[#FFFDF9] via-[#FCF4E8] to-[#F8EAD7] p-8 shadow-[0_24px_50px_-28px_rgba(91,58,41,0.55)] md:p-10"
            >
              <div className="overflow-hidden rounded-xl border border-[#EADCCA] bg-white/70 p-6 backdrop-blur-sm">
                <img src={brandLogo} alt="Antim Saathi" className="h-auto w-full object-contain" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.section
        id="services"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:px-8"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-[#5B3A29]">Arrange with Care</h2>
          <p className="mx-auto mt-2 max-w-2xl text-[#4B5563]">
            Choose individual services or follow our guided assistance.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid gap-5 md:grid-cols-2"
        >
          {quickActions.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => handleActionClick(item)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="group rounded-xl border border-[#EAE3D7] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#D97706]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-[#1F2937]">{item.title}</h3>
                    <p className="text-sm text-[#4B5563]">{item.description}</p>
                  </div>
                  <span className="text-xl text-[#D97706] transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.section>

      <div className="pb-20" />
    </motion.div>
  );
}

export default HomePage;
