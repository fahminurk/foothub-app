import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatToIDR } from "@/lib/utils";
import Image from "next/image";

type ShoeCardProps = {
  item: {
    id: number;
    name: string;
    price: number;
    shoeImage: {
      imgUrl: string;
    }[];
  };
};

const ShoeCard: React.FC<ShoeCardProps> = ({ item }) => {
  console.log(item);

  return (
    <Card>
      <CardContent className="p-0">
        <AspectRatio>
          <Image
            src={`http://localhost:8000/${item.shoeImage[0].imgUrl}`}
            alt="img"
            fill
            className="w-full object-cover"
          />
        </AspectRatio>
      </CardContent>
      <CardFooter className="p-0">
        <div className="p-1 flex flex-col w-full gap-1">
          <p className="font-semibold truncate">{item.name.toUpperCase()}</p>
          <Separator />
          <p className="text-sm">{formatToIDR(item.price)}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ShoeCard;
