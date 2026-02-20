import { motion } from "framer-motion";
import { memo, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/common/Footer";
import AnimatedWrapper from "@/components/common/AnimatedWrapper";
import { useWorkflow } from "@/context/WorkflowContext";
import brandLogo from "@/assets/images/antim-saathi-logo.jpeg";

const navItems = [
  { label: "Home", to: "/", type: "home" },
  { label: "Services", to: "/services", type: "services" },
  { label: "Rituals", to: "/rituals", type: "rituals" },
  { label: "Contact", to: "/contact", type: "contact" },
];

const Navbar = memo(function Navbar({
  location,
  mobileOpen,
  onToggleMobile,
  onCloseMobile,
  onGuided,
  onLogoClick,
}) {
  const isActiveItem = (item) => {
    if (item.type === "home") return location.pathname === "/";
    if (item.type === "services") return location.pathname === "/services";
    if (item.type === "rituals") return location.pathname === "/rituals";
    if (item.type === "contact") return location.pathname === "/contact";
    return false;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-[#D7BA80]/60 bg-white/90 shadow-[0_8px_30px_rgba(91,58,41,0.08)] backdrop-blur-sm"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 md:px-8">
        <button type="button" onClick={onLogoClick} className="flex items-center gap-3" aria-label="Go to homepage">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-[#E9E4DA] bg-white">
            <img src={brandLogo} alt="Antim Saathi logo" className="h-full w-full object-cover grayscale" />
          </span>
        </button>

        <nav className="hidden items-center justify-center gap-7 md:flex">
          {navItems.map((item) => {
            const active = isActiveItem(item);
            return (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={onCloseMobile}
                className={`group relative pb-1 text-[15px] transition-colors duration-300 ${
                  active ? "text-[#5B3A29]" : "text-[#4B5563] hover:text-[#5B3A29]"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[#D97706] transition-transform duration-300 group-hover:scale-x-100" />
                {active ? <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-full bg-[#D97706]" /> : null}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onGuided}
            className="hidden rounded-full bg-[#D97706] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
          >
            Start Guided Flow
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#5B3A29] md:hidden"
            onClick={onToggleMobile}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#EFE9DF] bg-white/95 px-4 py-3 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-2 pb-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={onCloseMobile}
                className={`rounded-md px-2 py-1.5 text-left text-[14px] ${
                  isActiveItem(item) ? "bg-[#FFF7ED] text-[#5B3A29]" : "text-[#374151] hover:bg-[#FAF5EB]"
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            onClick={onGuided}
            className="inline-flex w-full justify-center rounded-full bg-[#D97706] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start Guided Flow
          </button>
        </div>
      ) : null}
    </motion.header>
  );
});

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setGuidedMode } = useWorkflow();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleGuided = () => {
    setGuidedMode(true);
    setMobileOpen(false);
    navigate("/workflow/religion");
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#1F2937]">
      <Navbar
        location={location}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((prev) => !prev)}
        onCloseMobile={() => setMobileOpen(false)}
        onGuided={handleGuided}
        onLogoClick={handleLogoClick}
      />

      <main className="pt-[76px]">
        <AnimatedWrapper key={location.pathname}>
          <Outlet />
        </AnimatedWrapper>
      </main>

      {location.pathname === "/services" ? null : <Footer />}
    </div>
  );
}

export default MainLayout;
