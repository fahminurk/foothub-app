import api from "@/lib/axios";
import { TCategory } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useCategoryQuery = (): UseQueryResult<TCategory[], Error> => {
  return useQuery<TCategory[], Error>({
    queryKey: ["categories"],
    queryFn: () => api.get("/category").then((res) => res.data),
  });
};

export const useAddCategoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError<{ message: string }>, FormData, unknown>({
    mutationFn: (values) =>
      api.post("/category", values).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("successfully added category");
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};
