import api from "@/lib/axios";
import { TShoe, TSizeAndStock } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useShoeQuery = (query?: {
  category?: string;
  subcategory?: string;
  brand?: string;
  orderBy?: string;
  sortBy?: string;
}): UseQueryResult<TShoe[] | [], Error> => {
  return useQuery<TShoe[] | [], Error>({
    queryKey: ["shoes", query],
    queryFn: () =>
      api
        .get("/shoe", {
          params: query,
        })
        .then((res) => res.data),
  });
};

export const useShoeDetailQuery = (
  id: string
): UseQueryResult<{ shoe: TShoe; sizeAndStock: TSizeAndStock[] }, Error> => {
  return useQuery<{ shoe: TShoe; sizeAndStock: TSizeAndStock[] }, Error>({
    queryKey: ["shoe", id],
    queryFn: () => api.get(`/shoe/${id}`).then((res) => res.data),
  });
};
