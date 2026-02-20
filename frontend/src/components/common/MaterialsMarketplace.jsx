import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CalmButton from "@/components/common/CalmButton";

const materials = [
//   {
//     id: "wood-basic",
//     title: "Cremation Wood Package - Basic",
//     image: "https://images.unsplash.com/photo-1601314002592-b8734bca6604?auto=format&fit=crop&w=500&q=80",
//     price: 3500,
//   },
//   {
//     id: "wood-standard",
//     title: "Cremation Wood Package - Standard",
//     image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=500&q=80",
//     price: 5200,
//   },
//   {
//     id: "wood-premium",
//     title: "Cremation Wood Package - Premium",
//     image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=500&q=80",
//     price: 7600,
//   },
//   {
//     id: "samagri-kit",
//     title: "Samagri Ritual Kit",
//     image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80",
//     price: 1800,
//   },
//   {
//     id: "cloth-set",
//     title: "Ceremonial Cloth Set",
//     image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80",
//     price: 950,
//   },
//   {
//     id: "urn",
//     title: "Asthi Collection Urn",
//     image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=500&q=80",
//     price: 1200,
//   },
];

function MaterialsMarketplace({ onUpdate }) {
  const [cart, setCart] = useState({});

  const updateQty = (id, delta) => {
    setCart((prev) => {
      const nextQty = Math.max(0, (prev[id] || 0) + delta);
      const next = { ...prev, [id]: nextQty };
      if (nextQty === 0) {
        delete next[id];
      }
      return next;
    });
  };

  const selectedItems = useMemo(
    () =>
      materials
        .filter((item) => cart[item.id])
        .map((item) => ({
          ...item,
          quantity: cart[item.id],
          total: cart[item.id] * item.price,
        })),
    [cart]
  );

  const subtotal = useMemo(
    () => selectedItems.reduce((sum, item) => sum + item.total, 0),
    [selectedItems]
  );

  const syncSelection = () => {
    if (onUpdate) {
      onUpdate(selectedItems);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {materials.map((item) => {
          const qty = cart[item.id] || 0;

          return (
            <Card key={item.id} className="rounded-xl border border-[#E8E5DF] bg-white shadow-sm">
              <CardContent className="space-y-3 p-4">
                <img src={item.image} alt={item.title} className="h-28 w-full rounded-lg object-cover" loading="lazy" />
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h5 className="text-[15px] text-[#5B3A29]">{item.title}</h5>
                    <p className="text-[14px] text-[#4B5563]">INR {item.price.toLocaleString("en-IN")}</p>
                  </div>
                  <span className="rounded-full border border-[#E5E7EB] px-2 py-1 text-[11px] text-[#4B5563]">Govt Fixed Price</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] px-2 py-1">
                    <button type="button" onClick={() => updateQty(item.id, -1)} className="text-[#4B5563]">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-4 text-center text-[14px]">{qty}</span>
                    <button type="button" onClick={() => updateQty(item.id, 1)} className="text-[#4B5563]">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button type="button" onClick={syncSelection} className="text-[13px] text-[#D97706]">
                    Add to booking
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="sticky bottom-4 rounded-xl border border-[#E7DFC8] bg-[#FFF8EE] p-4 shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-[15px] text-[#5B3A29]">Subtotal</p>
          <p className="text-[18px] font-medium text-[#5B3A29]">INR {subtotal.toLocaleString("en-IN")}</p>
        </div>
        <CalmButton className="mt-3 h-10 w-full" onClick={syncSelection}>
          Confirm Materials Selection
        </CalmButton>
      </div>
    </div>
  );
}

export default MaterialsMarketplace;
