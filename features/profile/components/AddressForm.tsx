import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useCityQuery, useProvinceQuery } from "@/actions/useProvince";
import {
  useAddAddressMutation,
  useUpdateAddressMutation,
} from "@/actions/useAddress";
import { addressSchema } from "@/schema";
import { FaArrowRight } from "react-icons/fa";
import { TAddress } from "@/types";

interface AddressFormProps {
  val?: TAddress;
  type: "UPDATE" | "ADD";
}

const AddressForm: React.FC<AddressFormProps> = ({ val, type }) => {
  const [open, setOpen] = React.useState(false);
  const { data: provinces } = useProvinceQuery();
  const { mutateAsync: addAddress, isPending: addPending } =
    useAddAddressMutation();
  const { mutateAsync: updateAddress, isPending: updatePending } =
    useUpdateAddressMutation();

  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      name: val?.name || "",
      title: val?.title || "",
      phone: val?.phone || "",
      address: val?.address || "",
      addressDetails: val?.addressDetails || "",
      city_id: val?.city_id || "",
      province_id: val?.city.province_id || "",
      isPrimary: val?.isPrimary || false,
    },
  });

  const { data: cities } = useCityQuery(
    form.watch("province_id") || val?.city.province_id
  );

  async function onSubmit(values: z.infer<typeof addressSchema>) {
    if (type === "ADD") {
      await addAddress(values);
    } else {
      await updateAddress({ id: val?.id as number, ...values });
    }
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        size={val && "xs"}
        variant={"outline"}
        onClick={() => setOpen(!open)}
      >
        {type === "UPDATE" ? "update" : "Add"}
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5 text-xl font-bold">
            {type} ADDRESS
          </DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder=" " {...field} />
                    </FormControl>
                    <FormLabel>title</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder=" " {...field} />
                    </FormControl>
                    <FormLabel>name</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder=" " type="number" {...field} />
                    </FormControl>
                    <FormLabel>phone</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder=" " {...field} />
                    </FormControl>
                    <FormLabel>address</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="addressDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder=" " {...field} />
                    </FormControl>
                    <FormLabel>addressDetails</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="province_id"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Province</FormLabel> */}
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select province" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        {provinces?.map((item) => (
                          <SelectItem
                            key={item.province_id}
                            value={item.province_id}
                          >
                            {item.province}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city_id"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>City</FormLabel> */}
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        {cities?.map((item) => (
                          <SelectItem key={item.city_id} value={item.city_id}>
                            {item.type} {item.city_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isPrimary"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <div className="pl-2 text-xs font-semibold">
                      Use as my default address
                    </div>
                  </FormItem>
                )}
              />

              <Button
                className="w-full"
                variant={"secondary"}
                type="submit"
                disabled={addPending || updatePending}
              >
                SUBMIT
                <FaArrowRight />
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddressForm;
