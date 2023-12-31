import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryForm from "@/features/dashboard/category/CategoryForm";
import SubcategoryForm from "@/features/dashboard/category/SubcategoryForm";
import BrandForm from "@/features/dashboard/brand/BrandForm";
import BrandList from "@/features/dashboard/brand/BrandList";
import CategoryList from "@/features/dashboard/category/CategoryList";
import SubcategoryList from "@/features/dashboard/category/SubcategoryList";
import ProductForm from "@/features/dashboard/product/ProductForm";
import ProductList from "@/features/dashboard/product/ProductList";

const Page = () => {
  return (
    <div className="p-4">
      <Tabs defaultValue="product" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="stock">Stock</TabsTrigger>
          <TabsTrigger value="size">Size</TabsTrigger>
        </TabsList>
        <TabsContent value="product" className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-bold">PRODUCTS</p>
            <ProductForm />
          </div>
          <ProductList />
        </TabsContent>
        <TabsContent value="stock" className="flex flex-col mt-0 gap-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-bold">STOCKS</p>
            <CategoryForm />
          </div>
          <CategoryList />
        </TabsContent>
        <TabsContent value="size" className="flex flex-col mt-0 gap-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-bold">SIZES</p>
            <SubcategoryForm />
          </div>
          <SubcategoryList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
