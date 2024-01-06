import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TAddress } from "@/types";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import AddressForm from "./AddressForm";
import DeleteAlert from "@/components/deleteAlert";
import { useDeleteAddressMutation } from "@/actions/useAddress";

type AddressCardProps = {
  val: TAddress;
  selectedAddress?: TAddress;
  setSelectedAddress?: React.Dispatch<
    React.SetStateAction<TAddress | undefined>
  >;
};

const AddressCard: React.FC<AddressCardProps> = ({
  val,
  selectedAddress,
  setSelectedAddress,
}) => {
  const { mutateAsync, isPending } = useDeleteAddressMutation();
  return (
    <div
      key={val.id}
      onClick={() => setSelectedAddress && setSelectedAddress(val)}
      className={cn(
        "grid grid-cols-3 p-2 gap-1 rounded-lg border cursor-pointer",
        selectedAddress?.id === val.id && "border-black"
      )}
    >
      <div className="flex justify-center items-center gap-2 border-r-2 md:text-xl">
        {selectedAddress?.id === val.id && (
          <div>
            <BsCheck2 />
          </div>
        )}

        <div className="flex flex-col items-center">
          <p className="font-bold">{val.title.toUpperCase()}</p>
          {val.isPrimary && <p className="text-sm">(default)</p>}
        </div>
      </div>
      <div className="flex flex-col col-span-2">
        <p className="font-bold">{val.name}</p>
        <p className="overflow-hidden text-ellipsis">{val.address}</p>
        <p>
          {val.city.city_name}, {val.city.province.province}, {val.postcal_code}
        </p>
        <p>{val.phone}</p>
        <div className="flex justify-end gap-1">
          <AddressForm type="UPDATE" val={val} />
          <DeleteAlert
            id={val.id}
            mutateAsync={mutateAsync}
            isPending={isPending}
          />
          {/* <Button size={"xs"} variant={"destructive"}>
            delete
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
