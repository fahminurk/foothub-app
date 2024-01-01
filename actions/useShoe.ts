import api from "@/lib/axios";
import { TShoe, TShoeDetails, TShoeSize, TSizeAndStock, TStock } from "@/types";
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
  search?: string;
};

type TVariables = {
  name: string;
  description: string;
  price: string;
  weight: string;
  status: "BESTSELLER" | "NORMAL" | "DISCOUNT";
  categoryId: string;
  subcategoryId: string;
  brandId: string;
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

export const useAddProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError<{ message: string }>, FormData, unknown>({
    mutationFn: (values) => api.post("/shoe", values).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      toast.success("successfully added product");
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};

export const useSizeQuery = () => {
  return useQuery<TShoeSize[], AxiosError>({
    queryKey: ["sizes"],
    queryFn: () => api.get("/shoe/size").then((res) => res.data),
  });
};

export const useAddSizeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<
    any,
    AxiosError<{ message: string }>,
    { size: string },
    unknown
  >({
    mutationFn: (values) =>
      api.post("/shoe/size", values).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sizes"] });
      toast.success("successfully added size");
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};

export const useStockQuery = () => {
  return useQuery<TStock[], AxiosError>({
    queryKey: ["stocks"],
    queryFn: () => api.get("/stock").then((res) => res.data),
  });
};

export const useAddStockMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<
    any,
    AxiosError<{ message: string }>,
    { stock: string; shoeId: string; sizeId: string },
    unknown
  >({
    mutationFn: (values) => api.post("/stock", values).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stocks"] });
      toast.success("successfully added stock");
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};
