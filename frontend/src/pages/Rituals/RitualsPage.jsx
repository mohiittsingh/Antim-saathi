import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const ritualContent = {
  Hindu: {
    intro: "Antyeshti is the Hindu final rite honoring the departed with prayer, cremation, and remembrance traditions.",
    points: [
      "Antyeshti includes purification rites, prayers, and final family observances.",
      "Cremation ritual is performed under priest or elder guidance with dignity.",
      "Asthi immersion takes place in holy waters as part of final transition rites.",
      "Shraddha ceremony supports remembrance and continuity in the days that follow.",
    ],
    images: [
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988f7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1000&q=80",
    ],
    readMore:
      "Regional traditions may vary in timing and observance, but the core intent remains prayerful dignity, family support, and respectful transition.",
  },
  Muslim: {
    intro: "Islamic final rites emphasize humility, cleanliness, prayer, and timely burial.",
    points: [
      "Ghusl is a ritual washing carried out respectfully by designated persons.",
      "Janazah prayer is offered collectively seeking mercy for the departed.",
      "Burial is completed with dignity and community support.",
    ],
    images: ["https://images.unsplash.com/photo-1484186304838-0bf1a8cff81c?auto=format&fit=crop&w=1000&q=80"],
  },
  Sikh: {
    intro: "Sikh Antam Sanskar focuses on prayer, acceptance of divine will, and collective remembrance.",
    points: [
      "Antam Sanskar includes recitation from Gurbani and reflective prayer.",
      "Ardas is offered for peace and spiritual strength.",
      "Cremation and remembrance gatherings are commonly observed.",
    ],
    images: ["https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80"],
  },
  Christian: {
    intro: "Christian funeral traditions include worship, remembrance, and compassionate family support.",
    points: [
      "Church service includes scripture, hymns, and memorial reflections.",
      "Burial or cremation is chosen by family and denomination practice.",
      "Memorial gathering supports communal remembrance and care.",
    ],
    images: ["https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1000&q=80"],
  },
};

const tabOrder = ["Hindu", "Muslim", "Sikh", "Christian"];

function RitualsPage() {
  const [activeTab, setActiveTab] = useState("Hindu");
  const [showMore, setShowMore] = useState(false);
  const article = useMemo(() => ritualContent[activeTab], [activeTab]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl rounded-2xl border border-[#ECE8E1] bg-white p-6 shadow-sm md:p-8"
      >
        <h1 className="text-3xl font-semibold text-[#5B3A29]">Ritual Traditions & Procedures</h1>
        <p className="mt-3 text-[#4B5563]">Article-based guidance across major traditions with respectful references.</p>

        <div className="mt-6 flex flex-wrap gap-2 border-b border-[#ECE8E1] pb-4">
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
            className="mt-6"
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
    </section>
  );
}

export default RitualsPage;
