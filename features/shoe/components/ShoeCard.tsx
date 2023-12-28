import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatToIDR } from "@/lib/utils";
import { TShoe } from "@/types";
import Image from "next/image";

type ShoeCardProps = {
  item: TShoe;
};

const ShoeCard: React.FC<ShoeCardProps> = ({ item }) => {
  return (
    <Card className="">
      <CardContent className="p-0">
        <AspectRatio>
          <Image
            src={item.shoeImage[0].imgUrl}
            alt="img"
            fill
            className="w-full object-cover"
          />
        </AspectRatio>
      </CardContent>
      <CardFooter className="p-0">
        <div className="p-1 flex flex-col w-full gap-1">
          <p className="font-semibold truncate text-sm sm:text-lg">
            {item.name}
          </p>
          <Separator />
          <p className="text-xs">
            {item.brand.name} • {item.category.name} • {item.subCategory.name}
          </p>
          <Separator />
          <p className="text-sm">{formatToIDR(item.price)}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ShoeCard;
