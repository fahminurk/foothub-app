"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";
import { ChangeEventHandler, useRef, useState } from "react";
import { toast } from "sonner";
import { profileSchema } from "@/schema";
import { useUpdateProfileMutation } from "@/actions/useProfile";

const ProfileForm = () => {
  const user = useAuthStore().user;
  const { mutateAsync } = useUpdateProfileMutation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name,
      phone: user?.phone,
    },
  });

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    if (selectedFile) {
      formData.append("file", selectedFile as Blob);
    }

    mutateAsync(formData);
  }

  const handleInputProfilePictureChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const MAX_SIZE = 2 * 1024 * 1024;

    if (event.target.files?.length) {
      if (event.target.files[0].size > MAX_SIZE) {
        event.target.value = "";
        return toast.error("Batas file size 2 MB");
      }

      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar
        className="w-40 h-40 cursor-pointer"
        onClick={() => imgRef.current?.click()}
      >
        <AvatarImage src={user?.avatarUrl} />
        <AvatarFallback className="w-40 h-40">CN</AvatarFallback>
      </Avatar>
      <Input
        ref={imgRef}
        type="file"
        className="hidden"
        onChange={handleInputProfilePictureChange}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name </FormLabel>
                <FormControl>
                  <Input placeholder="name" type="text" {...field} />
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
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
