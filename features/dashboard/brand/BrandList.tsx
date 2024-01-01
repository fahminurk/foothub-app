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
import { useBrandQuery } from "@/actions/useBrand";
import ActionDropdown from "@/components/elements/ActionDropdown";
import { InputGroup } from "@/components/ui/inputGroup";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDebounce } from "use-debounce";

const BrandList = () => {
  const [keyword, setKeyword] = useState("");
  const [value] = useDebounce(keyword, 1000);
  const { data } = useBrandQuery();

  return (
    <>
      <div className="flex justify-between gap-2">
        <div className="max-w-lg w-full">
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Brand..."
          />
        </div>
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
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead className="w-[120px] h-[120px]">image</TableHead>
            <TableHead>name</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((val, i) => (
            <TableRow key={val.id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>
                <img
                  src={val.imgUrl}
                  alt="img"
                  className="object-cover aspect-square"
                />
              </TableCell>
              <TableCell>{val.name}</TableCell>
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

export default BrandList;
