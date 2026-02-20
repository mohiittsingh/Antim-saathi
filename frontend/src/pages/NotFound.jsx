import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-xl border border-[#E8E5DF] bg-white p-8 text-center shadow-sm">
      <h2 className="text-[28px] text-[#5B3A29]">Page Not Found</h2>
      <p className="mt-2 text-[15px] text-[#4B5563]">The page you are looking for does not exist or was moved.</p>
      <Link to="/" className="mt-4 inline-block text-[14px] text-[#D97706]">
        Return to homepage
      </Link>
    </div>
  );
}

export default NotFound;
