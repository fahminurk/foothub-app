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
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useAddCategoryMutation } from "@/actions/useCategory";

export const formSchema = z.object({
  name: z.string().min(2),
});

const CategoryForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const [open, setOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [image, setImage] = useState<string>("");
  const { mutateAsync, isPending } = useAddCategoryMutation();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("name", values.name);
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    await mutateAsync(formData);
    form.reset();
    setSelectedFile(null);
    setOpen(false);
  }

  const handleFile: ChangeEventHandler<HTMLInputElement> = (event) => {
    const MAX_SIZE = 2 * 1024 * 1024;

    if (event.target.files?.length) {
      if (event.target.files[0].size > MAX_SIZE) {
        event.target.value = "";
        return toast.error("Batas file size 2 MB");
      }
      setSelectedFile(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant={"outline"} onClick={() => setOpen(!open)}>
        Add
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5 text-xl font-bold">
            ADD CATEGORY
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

              <Input type="file" onChange={handleFile} accept="image/*" />

              <div className="flex justify-end">
                <Button type="submit" disabled={isPending}>
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

export default CategoryForm;
