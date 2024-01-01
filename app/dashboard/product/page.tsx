import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductForm from "@/features/dashboard/product/ProductForm";
import ProductList from "@/features/dashboard/product/ProductList";
import SizeForm from "@/features/dashboard/product/SizeForm";
import SizeList from "@/features/dashboard/product/SizeList";
import StockForm from "@/features/dashboard/product/StockForm";
import StockList from "@/features/dashboard/product/StockList";

const Page = () => {
  return (
    <div className="p-4 ">
      <Tabs defaultValue="product" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="stock">Stock</TabsTrigger>
          <TabsTrigger value="size">Size</TabsTrigger>
        </TabsList>
        <TabsContent value="product" className="flex flex-col gap-4 ">
          <div className="flex justify-between items-center ">
            <p className="text-2xl lg:text-4xl font-bold">PRODUCTS</p>
            <ProductForm />
          </div>
          <ProductList />
        </TabsContent>
        <TabsContent value="stock" className="flex flex-col mt-0 gap-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-bold">STOCKS</p>
            <StockForm />
          </div>
          <StockList />
        </TabsContent>
        <TabsContent value="size" className="flex flex-col mt-0 gap-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-bold">SIZES</p>
            <SizeForm />
          </div>
          <SizeList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
