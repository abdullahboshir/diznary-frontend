import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const OfferCard = ({
  imageSrc
}: any) => {
  return (
    <Card className="w-full max-w-xl bg-gradient-to-r from-lime-100 via-white to-lime-50 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-lime-200">
      <CardContent className="flex items-center justify-between">

        {/* Right: Image */}
        <div className="w-full h-40 relative">
          <Image
            src={imageSrc}
            alt="Offer Image"
            fill
            className="rounded-md object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
};
