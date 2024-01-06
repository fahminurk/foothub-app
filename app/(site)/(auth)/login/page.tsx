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
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useLoginMutation } from "@/actions/useAuth";
import { loginSchema } from "@/schema";
import { FaArrowRight, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Page = () => {
  const { mutateAsync, isPending } = useLoginMutation();
  const [show, setShow] = useState<boolean>(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    await mutateAsync(values);
  }

  return (
    <div className="h-[90vh] flex justify-center items-center p-2">
      <div className="max-w-xl w-full flex flex-col gap-2 p-4 md:border">
        <p className="text-4xl font-bold pb-3">Login</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder=" " {...field} />
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
            <Button
              className="w-full"
              variant={"secondary"}
              type="submit"
              disabled={isPending}
            >
              LOGIN
              <FaArrowRight />
            </Button>
          </form>
        </Form>
        <Separator className="mt-4" />
        <div className="flex text-sm font-semibold justify-center gap-2">
          <p className="">Don&apos;t have an account?</p>
          <Link href={"/register"}>
            <p className="text-blue-700 hover:underline">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
