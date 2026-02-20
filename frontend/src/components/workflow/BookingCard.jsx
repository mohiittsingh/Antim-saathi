import { BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CalmButton from "@/components/common/CalmButton";

function BookingCard({
  image,
  title,
  subtitle,
  meta = [],
  price,
  badge = "Govt Certified",
  actionLabel = "Select & Continue",
  onAction,
}) {
  return (
    <Card className="rounded-xl border border-[#E5E1D9] bg-white shadow-sm transition hover:shadow-md">
      <CardContent className="p-4">
        <div className="grid gap-4 md:grid-cols-[180px_1fr]">
          {image ? (
            <img src={image} alt={title} className="h-32 w-full rounded-lg border border-[#E5E7EB] object-cover" loading="lazy" />
          ) : (
            <div className="h-32 w-full rounded-lg border border-[#E5E7EB] bg-[#F6F4EF]" />
          )}

          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-[18px] text-[#5B3A29]">{title}</h4>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] px-2 py-1 text-[12px] text-[#4B5563]">
                <BadgeCheck className="h-3.5 w-3.5 text-[#D97706]" />
                {badge}
              </span>
            </div>

            {subtitle ? <p className="mt-1 text-[14px] text-[#4B5563]">{subtitle}</p> : null}

            {meta.length ? (
              <div className="mt-3 grid gap-1 text-[14px] text-[#4B5563] sm:grid-cols-2">
                {meta.map((item) => (
                  <p key={item.label}>
                    <span className="font-medium text-[#374151]">{item.label}:</span> {item.value}
                  </p>
                ))}
              </div>
            ) : null}

            <div className="mt-4 flex items-center justify-between border-t border-[#F0ECE5] pt-3">
              <p className="text-[16px] font-medium text-[#5B3A29]">{price}</p>
              <CalmButton onClick={onAction} className="h-9 px-4">
                {actionLabel}
              </CalmButton>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default BookingCard;
