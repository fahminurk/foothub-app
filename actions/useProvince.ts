import api from "@/lib/axios";
import { TCity, TProvince } from "@/types";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useProvinceQuery = (): UseQueryResult<TProvince[], Error> => {
  return useQuery<TProvince[], Error>({
    queryKey: ["provinces"],
    queryFn: () => api.get("/provinces").then((res) => res.data),
  });
};

export const useCityQuery = (
  id: string | undefined
): UseQueryResult<TCity[], Error> => {
  return useQuery<TCity[], Error>({
    queryKey: ["cities", id],
    queryFn: () => api.get("/cities/" + id).then((res) => res.data),
  });
};
