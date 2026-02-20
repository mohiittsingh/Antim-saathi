import { motion } from "framer-motion";

const locations = [
  {
    name: "Varanasi",
    detail: "Traditional Hindu cremation and asthi immersion.",
    image:
      "https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Haridwar",
    detail: "Sacred river rites and family prayer gatherings.",
    image:
      "https://images.unsplash.com/photo-1613553497126-a44624272024?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Rameshwaram",
    detail: "Coastal ritual traditions with temple-linked ceremonies.",
    image:
      "https://images.unsplash.com/photo-1627894309532-f5dd4a470d0d?auto=format&fit=crop&w=900&q=80",
  },
];

function SacredTravel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-[#ECE8E1] bg-white p-5 shadow-sm md:p-7"
    >
      <h3 className="text-2xl font-semibold text-[#5B3A29]">Sacred Ritual Travel & Immersion Ceremonies</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#4B5563]">
        Assist families in performing final rites at holy locations.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {locations.map((item) => (
          <article key={item.name} className="overflow-hidden rounded-lg border border-[#EEE8DC] bg-[#FFFCF8] shadow-sm">
            <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
            <div className="p-3">
              <h4 className="text-base font-semibold text-[#5B3A29]">{item.name}</h4>
              <p className="mt-1 text-sm text-[#4B5563]">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 rounded-lg border border-[#EEE8DC] bg-[#FFFCF8] p-4">
        <p className="text-sm leading-relaxed text-[#374151]">Varanasi - Traditional Hindu cremation and asthi immersion</p>
        <p className="mt-2 text-sm leading-relaxed text-[#374151]">Haridwar - Sacred river rites</p>
        <p className="mt-2 text-sm leading-relaxed text-[#374151]">Rameshwaram - Coastal ritual traditions</p>
      </div>
    </motion.section>
  );
}

export default SacredTravel;
