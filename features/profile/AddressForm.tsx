import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import api from "@/lib/axios";
import { useAddressQuery } from "@/actions/useAddress";

const formSchema = z.object({
  title: z.string().min(2),
  name: z.string().min(2),
  phone: z
    .string()
    .min(11)
    .max(12)
    .startsWith("08", { message: "Invalid phone number, must start with 08" }),
  address: z.string().min(3),
  addressDetails: z.string().min(3),
  city_id: z.string(),
  province_id: z.string(),
  isPrimary: z.boolean(),
});

const AddressForm = () => {
  const [open, setOpen] = React.useState(false);
  const { data: provinces } = useProvinceQuery();
  const { data } = useAddressQuery();
  console.log(data);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      phone: "",
      address: "",
      addressDetails: "",
      city_id: "",
      province_id: "",
      isPrimary: false,
    },
  });

  const { data: cities } = useCityQuery(form.watch("province_id"));

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const res = await api.post("/address", values);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <Button variant={"outline"} onClick={() => setOpen(!open)}>
          Add Address
        </Button>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="mb-5 text-xl font-bold">
              ADD ADDRESS
            </DialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>title</FormLabel>
                      <FormControl>
                        <Input placeholder="title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>name</FormLabel>
                      <FormControl>
                        <Input placeholder="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="must start with 08, ex: 08123456789"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>address</FormLabel>
                      <FormControl>
                        <Input placeholder="address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="addressDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>addressDetails</FormLabel>
                      <FormControl>
                        <Input placeholder="address details" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="province_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Province</FormLabel>
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
                      <FormLabel>City</FormLabel>
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
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="pl-2">
                        Use as my default address
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddressForm;
