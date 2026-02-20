import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const ritualContent = {
  Hindu: {
    intro:
      "Antyeshti is the Hindu final rite that honors the departed through prayer, cremation, and remembrance rituals performed by family and community.",
    points: [
      "Antyeshti begins with purification rites, mantra recitation, and final family prayers.",
      "Cremation ritual is performed with sacred fire and guidance from priest or elder.",
      "Asthi immersion is observed by placing ashes in a holy river at a suitable time.",
      "Shraddha ceremony supports remembrance, gratitude, and family continuity in the days that follow.",
    ],
    images: [
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988f7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1000&q=80",
    ],
    readMore:
      "Families often combine regional customs with core Vedic practices. Timing, offerings, and memorial meals vary by community, while the central purpose remains dignity, prayer, and respectful transition.",
  },
  Muslim: {
    intro:
      "Islamic funeral practice emphasizes humility, cleanliness, prayer, and timely burial according to established religious guidance.",
    points: [
      "Ghusl includes ritual washing performed respectfully by designated persons.",
      "Janazah prayer is offered in congregation seeking mercy for the departed.",
      "Burial process places the deceased with dignity and community support.",
    ],
    images: [
      "https://images.unsplash.com/photo-1484186304838-0bf1a8cff81c?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  Sikh: {
    intro:
      "Sikh Antam Sanskar focuses on acceptance of divine will, prayerful remembrance, and community participation.",
    points: [
      "Antam Sanskar includes recitation from Gurbani and reflective prayer.",
      "Ardas is offered collectively for peace and spiritual strength.",
      "Cremation is commonly observed, followed by remembrance gatherings.",
    ],
    images: [
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  Christian: {
    intro:
      "Christian funeral traditions emphasize prayer, thanksgiving for life, and compassionate support for loved ones.",
    points: [
      "Church service includes scripture, hymns, and remembrance reflections.",
      "Burial or cremation is chosen based on family and denominational practice.",
      "Memorial gathering supports collective remembrance and emotional care.",
    ],
    images: [
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1000&q=80",
    ],
  },
};

const tabOrder = ["Hindu", "Muslim", "Sikh", "Christian"];

function MemorialMedia() {
  const [activeTab, setActiveTab] = useState("Hindu");
  const [showMore, setShowMore] = useState(false);

  const article = useMemo(() => ritualContent[activeTab], [activeTab]);

  return (
    <section className="space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl border border-[#ECE8E1] bg-white p-5 shadow-sm md:p-7"
      >
        <h3 className="text-2xl font-semibold text-[#5B3A29]">Ritual Traditions & Procedures</h3>
        <p className="mt-2 text-[15px] text-[#4B5563]">
          Understand core procedures across traditions with respectful, article-style guidance.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 border-b border-[#ECE8E1] pb-4">
          {tabOrder.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setShowMore(false);
              }}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                activeTab === tab ? "bg-[#D97706] text-white" : "bg-[#F8F6F2] text-[#4B5563] hover:bg-[#F3EDE2]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-4xl"
          >
            <p className="text-[15px] leading-relaxed text-[#374151]">{article.intro}</p>
            <div className="my-4 h-px bg-[#ECE8E1]" />
            <div className="space-y-3">
              {article.points.map((point) => (
                <p key={point} className="text-[15px] leading-relaxed text-[#374151]">
                  {point}
                </p>
              ))}
            </div>

            <div className={`mt-5 grid gap-4 ${article.images.length > 1 ? "md:grid-cols-3" : "md:grid-cols-1"}`}>
              {article.images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`${activeTab} ritual reference ${index + 1}`}
                  className="h-48 w-full rounded-lg object-cover shadow-sm"
                />
              ))}
            </div>

            {activeTab === "Hindu" ? (
              <div className="mt-5 border-t border-[#ECE8E1] pt-4">
                <button
                  type="button"
                  onClick={() => setShowMore((prev) => !prev)}
                  className="text-sm font-medium text-[#D97706]"
                >
                  {showMore ? "Show Less" : "Read More"}
                </button>
                <AnimatePresence>
                  {showMore ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden pt-3 text-[15px] leading-relaxed text-[#374151]"
                    >
                      {article.readMore}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : null}
          </motion.article>
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl border border-[#ECE8E1] bg-white p-5 shadow-sm md:p-7"
      >
        <h4 className="text-xl font-semibold text-[#5B3A29]">Connect With Us</h4>
        <p className="mt-2 text-sm text-[#4B5563]">We respond within 24 hours.</p>

        <div className="mt-4 grid gap-2 text-sm text-[#374151]">
          <p><span className="font-medium">Name:</span> Mohit</p>
          <p><span className="font-medium">Email:</span> your@email.com</p>
          <p><span className="font-medium">Phone:</span> +91 XXXXX XXXXX</p>
        </div>

        <form className="mt-5 grid gap-3" onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#D97706]"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#D97706]"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#D97706]"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-[#D97706] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:w-fit"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default MemorialMedia;
