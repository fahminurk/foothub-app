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
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRegisterMutation } from "@/actions/useAuth";
import { registerSchema } from "@/schema";
import { FaArrowRight, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Page = () => {
  const { mutateAsync, isPending } = useRegisterMutation();
  const [show, setShow] = useState<boolean>(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    await mutateAsync(values);
  }
  return (
    <div className="h-[90vh] flex justify-center items-center p-2">
      <div className="max-w-xl w-full flex flex-col gap-2 p-4 md:border">
        <p className="text-4xl font-bold pb-3">Register</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder=" " type="email" {...field} />
                  </FormControl>
                  <FormLabel>email</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type={show ? "text" : "password"}
                      placeholder=" "
                      {...field}
                    />
                  </FormControl>
                  <Button
                    onClick={() => setShow(!show)}
                    type="button"
                    className={
                      (cn(""),
                      form.formState.errors.password
                        ? "top-2 absolute right-3"
                        : "absolute right-3 top-1/2 -translate-y-1/2")
                    }
                  >
                    {show ? <FaRegEye /> : <FaRegEyeSlash />}
                  </Button>
                  <FormLabel>password</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder=" " {...field} />
                  </FormControl>
                  <FormLabel>name </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              disabled={isPending}
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
            <Button
              className="w-full"
              variant={"secondary"}
              type="submit"
              disabled={isPending}
            >
              REGISTER
              <FaArrowRight />
            </Button>
          </form>
        </Form>
        <Separator className="mt-4" />
        <div className="flex text-sm font-semibold justify-center gap-2">
          <p className="">Already have an account?</p>
          <Link href="/login">
            <p className="text-blue-700 hover:underline">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
