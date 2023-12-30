import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryForm from "@/features/dashboard/category/CategoryForm";
import SubcategoryForm from "@/features/dashboard/category/SubcategoryForm";
import BrandForm from "@/features/dashboard/brand/BrandForm";
import BrandList from "@/features/dashboard/brand/BrandList";
import CategoryList from "@/features/dashboard/category/CategoryList";
import SubcategoryList from "@/features/dashboard/category/SubcategoryList";

const Page = () => {
  return (
    <div className="p-4">
      <Tabs defaultValue="brand" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="brand">Brand</TabsTrigger>
          <TabsTrigger value="category">Category</TabsTrigger>
          <TabsTrigger value="subcategory">Subcategory</TabsTrigger>
        </TabsList>
        <TabsContent value="brand" className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-bold">BRANDS</p>
            <BrandForm />
          </div>
          <BrandList />
        </TabsContent>
        <TabsContent value="category" className="flex flex-col mt-0 gap-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-bold">CATEGORIES</p>
            <CategoryForm />
          </div>
          <CategoryList />
        </TabsContent>
        <TabsContent value="subcategory" className="flex flex-col mt-0 gap-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-bold">SUBCATEGORIES</p>
            <SubcategoryForm />
          </div>
          <SubcategoryList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
