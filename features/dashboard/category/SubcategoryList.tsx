"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ActionDropdown from "@/components/elements/ActionDropdown";
import { useSubcategoryQuery } from "@/actions/useSubcategory";
import { InputGroup } from "@/components/ui/inputGroup";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useDebounce } from "use-debounce";

const SubcategoryList = () => {
  const [keyword, setKeyword] = useState("");
  const [value] = useDebounce(keyword, 1000);
  const { data } = useSubcategoryQuery();

  return (
    <>
      <div className="flex justify-between gap-2 w-full">
        <div className="max-w-lg w-full">
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Subcategory..."
          />
        </div>
        <div className="flex gap-1">
          <Select>
            <SelectTrigger className="max-w-max">
              <SelectValue placeholder="By Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Men">Men</SelectItem>
              <SelectItem value="Women">Women</SelectItem>
              <SelectItem value="Kid">Kid</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue={"asc"}>
            <SelectTrigger className="max-w-max">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">ASC</SelectItem>
              <SelectItem value="desc">DESC</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead className="w-[120px] h-[120px]">name</TableHead>
            <TableHead>category</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((val, i) => (
            <TableRow key={val.id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{val.name}</TableCell>
              <TableCell>{val.category.name}</TableCell>
              <TableCell className="text-right">
                <ActionDropdown>
                  <p>Edit</p>
                  <p>Delete</p>
                </ActionDropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default SubcategoryList;
