"use client";
import { useAddressQuery } from "@/actions/useAddress";
import AuthenticatedRoute from "@/components/guards/AuthenticatedRoute";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddressCard from "@/features/profile/components/AddressCard";
import AddressForm from "@/features/profile/components/AddressForm";
import ProfileForm from "@/features/profile/components/ProfileForm";

const Page = () => {
  const { data } = useAddressQuery();

  return (
    <AuthenticatedRoute>
      <div className="container my-5">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="order" disabled>
              Orders
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="lg:p-8">
              <CardHeader>
                <CardTitle>YOUR DETAILS</CardTitle>
                <CardDescription className="text-xs md:text-base">
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ProfileForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="address">
            <Card className="lg:p-8">
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle className="text-sm lg:text-base">
                  ADDRESS BOOK
                </CardTitle>
                <AddressForm />
              </CardHeader>
              <CardContent className="space-y-2">
                {data?.map((val) => (
                  <AddressCard key={val.id} val={val} />
                ))}
              </CardContent>
              <CardContent className="space-y-2">{/*  */}</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AuthenticatedRoute>
  );
};

export default Page;
