import api from "@/lib/axios";
import { TCategory, TShoe, TSubcategory } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useCategoryQuery = (): UseQueryResult<TCategory[], Error> => {
  return useQuery<TCategory[], Error>({
    queryKey: ["categories"],
    queryFn: () => api.get("/category").then((res) => res.data),
  });
};
