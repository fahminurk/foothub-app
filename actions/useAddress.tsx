import api from "@/lib/axios";
import { TCity, TProvince } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddressQuery = (): UseQueryResult<any[] | [], Error> => {
  return useQuery<any[] | [], Error>({
    queryKey: ["address"],
    queryFn: () => api.get("/address").then((res) => res.data),
  });
};
