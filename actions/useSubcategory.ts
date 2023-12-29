import api from "@/lib/axios";
import { TCity, TProvince, TSubcategory } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useSubcategoryQuery = (
  id: string
): UseQueryResult<TSubcategory[], Error> => {
  return useQuery<TSubcategory[], Error>({
    queryKey: ["subcategories", id],
    queryFn: () =>
      api.get("/subcategory/category/" + id).then((res) => res.data),
  });
};
