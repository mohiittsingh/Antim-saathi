import { Mail, Phone, User } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 border-t border-[#E8E5DF] bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 rounded-2xl border border-[#F0E7DA] bg-[#FCF7EF] px-6 py-10 text-center">
          <p className="mx-auto max-w-5xl text-xl leading-relaxed text-[#6A4A36]" style={{ fontFamily: "\"Lora\", serif" }}>
            Grief shared is grief halved.
          </p>
        </div>

        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-gray-600">
          Grief cannot be removed, but it can be shared.
          <br />
          We stand beside families - giving them time, clarity, and dignity when it matters most.
        </p>

        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center gap-3 text-sm text-[#4B5563]">
          <div className="inline-flex items-center gap-2">
            <User className="h-4 w-4 text-[#D97706]" />
            <span>Name: Mohit</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#D97706]" />
            <span>Email: mohiitsignh@email.com</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#D97706]" />
            <span>Phone: +91 XXXXX XXXXX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
