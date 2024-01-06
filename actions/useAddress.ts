import api from "@/lib/axios";
import { TAddress } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

type TVariables = {
  id?: number;
  name: string;
  title: string;
  phone: string;
  address: string;
  addressDetails: string;
  city_id: string;
  province_id: string;
  isPrimary: boolean;
};

export const useAddressQuery = (): UseQueryResult<TAddress[] | [], Error> => {
  return useQuery<TAddress[] | [], Error>({
    queryKey: ["address"],
    queryFn: () => api.get("/address").then((res) => res.data),
  });
};

export const useAddAddressMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError<{ message: string }>, TVariables, unknown>(
    {
      mutationFn: (values) =>
        api.post("/address", values).then((res) => res.data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["address"] });
        toast.success("successfully added address");
      },
      onError: (error) => {
        toast.error(error.response?.data.message);
      },
    }
  );
};

export const useUpdateAddressMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError<{ message: string }>, TVariables, unknown>(
    {
      mutationFn: (values) =>
        api.patch("/address/" + values.id, values).then((res) => res.data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["address"] });
        toast.success("successfully updated address");
      },
      onError: (error) => {
        toast.error(error.response?.data.message);
      },
    }
  );
};

export const useDeleteAddressMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError<{ message: string }>, number, unknown>({
    mutationFn: (id) => api.delete("/address/" + id).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("successfully deleted address");
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};
