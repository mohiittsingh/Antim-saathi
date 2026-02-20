import { motion } from "framer-motion";
import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl rounded-2xl border border-[#ECE8E1] bg-white p-6 shadow-sm md:p-8"
      >
        <h1 className="text-3xl font-semibold text-[#5B3A29]">Connect With Us</h1>
        <p className="mt-3 text-[#4B5563]">We are here to assist you with dignity and clarity.</p>

        <div className="mt-5 grid gap-2 text-sm text-[#374151]">
          <p><span className="font-medium">Name:</span> Mohit</p>
          <p><span className="font-medium">Email:</span> your@email.com</p>
          <p><span className="font-medium">Phone:</span> +91 XXXXX XXXXX</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
            className="rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#D97706]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            className="rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#D97706]"
            required
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
            rows={4}
            className="rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#D97706]"
            required
          />
          <button
            type="submit"
            className="w-full rounded-full bg-[#D97706] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:w-fit"
          >
            Send Message
          </button>
          {isSubmitted ? <p className="text-sm text-green-700">Mock submission received. Our team will contact you shortly.</p> : null}
        </form>
      </motion.div>
    </section>
  );
}

export default ContactPage;
