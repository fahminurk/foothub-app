"use client";
import React, { ChangeEventHandler, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { useCategoryQuery } from "@/actions/useCategory";
import { useSubcategoryByCateQuery } from "@/actions/useSubcategory";
import { toast } from "sonner";
import { useAddProductMutation } from "@/actions/useShoe";
import { useBrandQuery } from "@/actions/useBrand";

export const formSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  price: z.string().min(1),
  weight: z.string().min(1),
  status: z.enum(["BESTSELLER", "NORMAL", "DISCOUNT"]),
  brandId: z.string(),
  categoryId: z.string(),
  subcategoryId: z.string(),
});

const ProductForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      weight: "",
      status: "NORMAL",
      brandId: "",
      categoryId: "0",
      subcategoryId: "",
    },
  });

  const [open, setOpen] = React.useState(false);
  const { data: brands } = useBrandQuery();
  const { data: categories } = useCategoryQuery();
  const { data: subcategories } = useSubcategoryByCateQuery(
    form.watch("categoryId")
  );
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const { mutateAsync, isPending } = useAddProductMutation();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("weight", values.weight);
    formData.append("status", values.status);
    formData.append("brandId", values.brandId);
    formData.append("categoryId", values.categoryId);
    formData.append("subcategoryId", values.subcategoryId);
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        formData.append("files", file);
      }
    }

    await mutateAsync(formData);
    form.reset();
    setSelectedFiles(null);
    setOpen(false);
  }

  const handleFiles: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    const MAX_SIZE = 2 * 1024 * 1024;
    console.log(files);

    if (files?.length) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > MAX_SIZE) {
          e.target.value = "";
          return toast.error("Batas file size 2 MB");
        }
      }
    }
    setSelectedFiles(files);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant={"outline"} onClick={() => setOpen(!open)}>
        Add
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5 text-xl font-bold">
            ADD PRODUCT
          </DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>description</FormLabel>
                    <FormControl>
                      <Input placeholder="description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>price</FormLabel>
                    <FormControl>
                      <Input placeholder="price" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>weight</FormLabel>
                    <FormControl>
                      <Input placeholder="weight" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        <SelectItem value="NORMAL">Normal</SelectItem>
                        <SelectItem value="BESTSELLER">Best Seller</SelectItem>
                        <SelectItem value="DISCOUNT">Discount</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brandId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select brand" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        {brands?.map((item) => (
                          <SelectItem key={item.id} value={item.id.toString()}>
                            {item.name}
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
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        {categories?.map((item) => (
                          <SelectItem key={item.id} value={item.id.toString()}>
                            {item.name}
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
                name="subcategoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subcategory</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select subcategory" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        {subcategories?.map((item) => (
                          <SelectItem key={item.id} value={item.id.toString()}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Input
                type="file"
                onChange={handleFiles}
                accept="image/*"
                multiple
              />

              <div className="flex justify-end">
                <Button type="submit" disabled={isPending || !selectedFiles}>
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
