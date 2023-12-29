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
import { useLoginMutation } from "@/actions/useAuth";
import { loginSchema } from "@/schema";

const Page = () => {
  const { mutateAsync, isPending } = useLoginMutation();

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
      <div className="max-w-xl w-full flex flex-col gap-2 p-4 md:border rounded-xl">
        <p className="text-4xl font-bold border-b pb-3">Login</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="password
                    "
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              Login
            </Button>
          </form>
        </Form>
        <Separator />
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
