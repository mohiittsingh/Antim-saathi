import { MapPin, Navigation, Snowflake, UserRound } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useWorkflow } from "@/context/WorkflowContext";
import BookingCard from "@/components/workflow/BookingCard";

function HearseBooking() {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedName, setConfirmedName] = useState("");

  const { setHearse, goToNextStep, isGuidedMode } = useWorkflow();

  const vehicles = useMemo(
    () => [
      {
        id: "mh12-ab-4021",
        name: "Municipal Response Hearse",
        registration: "MH12 AB 4021",
        driver: "R. Kulkarni",
        distance: "4.8 km",
        eta: "18 min",
        refrigeration: "Available",
        price: "INR 2,450",
        image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "up16-cd-1983",
        name: "City Dignity Van",
        registration: "UP16 CD 1983",
        driver: "A. Sharma",
        distance: "7.1 km",
        eta: "24 min",
        refrigeration: "Available",
        price: "INR 3,100",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "dl3c-ef-8734",
        name: "Partner Support Hearse",
        registration: "DL3C EF 8734",
        driver: "S. Khan",
        distance: "5.5 km",
        eta: "21 min",
        refrigeration: "Not Available",
        price: "INR 2,780",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      },
    ],
    []
  );

  const handleBook = (vehicle) => {
    setHearse(vehicle);

    if (isGuidedMode) {
      goToNextStep();
      navigate("/workflow/cremation");
      return;
    }

    setConfirmedName(vehicle.name);
    setShowConfirmation(true);
  };

  return (
    <div className="space-y-5">
      <h3 className="text-[24px] text-[#5B3A29]">Available Transport Services Near You</h3>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-xl border border-[#E6E2DA] bg-[#1F2933] p-4 shadow-sm lg:col-span-2">
          <div className="relative h-[320px] overflow-hidden rounded-lg border border-white/10">
            <iframe
              title="Route map"
              src="https://www.google.com/maps?q=Ghaziabad&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#0F172A]/20" />

            <motion.div
              initial={{ left: "22%", top: "34%" }}
              animate={{ left: ["22%", "39%", "56%", "72%"], top: ["34%", "46%", "53%", "66%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute"
            >
              <div className="rounded-full bg-white p-1 shadow-sm">
                <Navigation className="h-3.5 w-3.5 text-[#D97706]" />
              </div>
            </motion.div>

            <div className="absolute left-4 top-4 rounded-md bg-[#7C2D12] px-2 py-1 text-[11px] text-white">Hospital Pickup</div>
            <div className="absolute bottom-4 right-4 rounded-md bg-[#D97706] px-2 py-1 text-[11px] text-white">Rudra Crematorium</div>
            <MapPin className="absolute left-5 top-12 h-4 w-4 text-[#FB923C]" />
          </div>
        </div>

        <div className="space-y-4 lg:col-span-3">
          {vehicles.map((vehicle) => (
            <BookingCard
              key={vehicle.id}
              image={vehicle.image}
              title={vehicle.name}
              subtitle={`${vehicle.registration} • ETA ${vehicle.eta}`}
              meta={[
                { label: "Driver", value: vehicle.driver },
                { label: "Distance", value: vehicle.distance },
                { label: "Refrigeration", value: vehicle.refrigeration },
                { label: "Badge", value: "Govt Certified" },
              ]}
              price={vehicle.price}
              actionLabel="Select & Continue"
              onAction={() => handleBook(vehicle)}
            />
          ))}
        </div>
      </div>

      {showConfirmation ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-md rounded-xl border border-[#E5E1D9] bg-white p-5 shadow-md">
            <h5 className="text-[20px] text-[#5B3A29]">Transport Service Confirmed</h5>
            <p className="mt-2 text-[15px] text-[#4B5563]">{confirmedName} has been reserved. Dispatch details will be sent shortly.</p>
            <button
              type="button"
              onClick={() => setShowConfirmation(false)}
              className="mt-4 rounded-xl bg-[#D97706] px-4 py-2 text-white"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default HearseBooking;
