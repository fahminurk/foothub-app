import api from "@/lib/axios";
import { TBrand } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useBrandQuery = (): UseQueryResult<TBrand[], Error> => {
  return useQuery<TBrand[], Error>({
    queryKey: ["brands"],
    queryFn: () => api.get("/brand").then((res) => res.data),
  });
};

export const useAddBrandMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError<{ message: string }>, FormData, unknown>({
    mutationFn: (values) => api.post("/brand", values).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brands"] });
      toast.success("successfully added brand");
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};
