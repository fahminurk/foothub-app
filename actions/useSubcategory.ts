import api from "@/lib/axios";
import { TCity, TProvince, TSubcategory } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

type TVariables = {
  name: string;
  categoryId: string;
};

export const useSubcategoryQuery = (): UseQueryResult<
  TSubcategory[],
  Error
> => {
  return useQuery<TSubcategory[], Error>({
    queryKey: ["subcategories"],
    queryFn: () => api.get("/subcategory").then((res) => res.data),
  });
};
export const useSubcategoryByCateQuery = (
  id: string
): UseQueryResult<TSubcategory[], Error> => {
  return useQuery<TSubcategory[], Error>({
    queryKey: ["subcategories", id],
    queryFn: () =>
      api.get("/subcategory/category/" + id).then((res) => res.data),
  });
};

export const useAddSubcategoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError<{ message: string }>, TVariables, unknown>(
    {
      mutationFn: (values) =>
        api.post("/subcategory", values).then((res) => res.data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["subcategories"] });
        toast.success("successfully added subcategory");
      },
      onError: (error) => {
        toast.error(error.response?.data.message);
      },
    }
  );
};
