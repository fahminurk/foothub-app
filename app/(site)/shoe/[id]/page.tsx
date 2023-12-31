"use client";
import { useShoeDetailQuery } from "@/actions/useShoe";
import Loader from "@/components/Loader";
import SidebarShoeDetails from "@/features/shoe/components/SidebarShoeDetails";
import { notFound } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data, isFetching } = useShoeDetailQuery(id);
  // if (!isFetching && !data) notFound();
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : data ? (
        <div className="container flex flex-col gap-4 my-4">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <img
              src={data.shoe.shoeImage[0].imgUrl}
              alt="img"
              className="w-full object-cover col-span-2"
            />
            <div className="sticky top-16 flex flex-col p-3 h-max gap-3 lg:h-screen lg:p-8 ">
              <SidebarShoeDetails data={data} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh]">No item</div>
      )}
    </>
  );
};

export default Page;
