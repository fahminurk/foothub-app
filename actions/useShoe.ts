import api from "@/lib/axios";
import { TShoe, TSizeAndStock } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Axios, AxiosError } from "axios";
import { toast } from "sonner";

type TQuery = {
  category?: string;
  subcategory?: string;
  brand?: string;
  orderBy?: string;
  sortBy?: string;
};

type TShoeDetails = {
  shoe: TShoe;
  sizeAndStock: TSizeAndStock[];
};

export const useShoeQuery = (query: TQuery | null) => {
  return useQuery<TShoe[], AxiosError>({
    queryKey: ["shoes", query],
    queryFn: () => api.get("/shoe", { params: query }).then((res) => res.data),
  });
};

export const useShoeDetailQuery = (
  id: string
): UseQueryResult<TShoeDetails, AxiosError> => {
  return useQuery<TShoeDetails, AxiosError>({
    queryKey: ["shoe", id],
    queryFn: () => api.get(`/shoe/${id}`).then((res) => res.data),
  });
};
