import { Button } from "@/components/ui/button";

function CalmButton({ className = "", children, ...props }) {
  return (
    <Button
      {...props}
      className={`ripple-btn rounded-xl bg-[#D97706] px-5 text-white shadow-sm transition hover:bg-[#C86D05] hover:shadow-md disabled:cursor-not-allowed disabled:bg-[#E8D6BC] ${className}`}
    >
      {children}
    </Button>
  );
}

export default CalmButton;
