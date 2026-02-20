import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import WorkflowLayout from "@/layouts/WorkflowLayout";
import CertificateAssistance from "@/pages/Workflow/CertificateAssistance";
import CremationBooking from "@/pages/Workflow/CremationBooking";
import HearseBooking from "@/pages/Workflow/HearseBooking";
import InviteGenerator from "@/pages/Workflow/InviteGenerator";
import MaterialsSelection from "@/pages/Workflow/MaterialsSelection";
import PriestBooking from "@/pages/Workflow/PriestBooking";
import QRPass from "@/pages/Workflow/QRPass";
import ReligionSelection from "@/pages/Workflow/ReligionSelection";
import { useWorkflow } from "@/context/WorkflowContext";
import ProtectedRoute from "@/routes/ProtectedRoute";

const HomePage = lazy(() => import("@/pages/Home/HomePage"));
const ServicesPage = lazy(() => import("@/pages/Services/ServicesPage"));
const ContactPage = lazy(() => import("@/pages/Contact/ContactPage"));
const RitualsPage = lazy(() => import("@/pages/Rituals/RitualsPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function WorkflowEntry() {
  const { isGuidedMode } = useWorkflow();
  return <Navigate to={isGuidedMode ? "religion" : "hearse"} replace />;
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="px-6 py-24 text-center text-sm text-[#6B7280]">Loading page...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/rituals" element={<RitualsPage />} />
          </Route>

          <Route path="/workflow" element={<WorkflowLayout />}>
            <Route index element={<WorkflowEntry />} />
            <Route
              path="religion"
              element={(
                <ProtectedRoute mode="guided">
                  <ReligionSelection />
                </ProtectedRoute>
              )}
            />
            <Route path="hearse" element={<HearseBooking />} />
            <Route path="cremation" element={<CremationBooking />} />
            <Route path="materials" element={<MaterialsSelection />} />
            <Route path="priest" element={<PriestBooking />} />
            <Route path="invite" element={<InviteGenerator />} />
            <Route path="qr-pass" element={<QRPass />} />
            <Route path="certificate" element={<CertificateAssistance />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
