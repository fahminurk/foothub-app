import api from "@/lib/axios";
import { User, useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

type TData = {
  accessToken: string;
  user: User;
};

type TVarLogin = {
  email: string;
  password: string;
};

type TVarRegister = {
  email: string;
  password: string;
  name: string;
  phone: string;
};

export const useLoginMutation = () => {
  const onAuthSuccess = useAuthStore((state) => state.onAuthSuccess);
  return useMutation<TData, AxiosError, TVarLogin, unknown>({
    mutationFn: (values) =>
      api.post("/auth/login", values).then((res) => res.data),
    onSuccess: (data) => {
      const { accessToken, user } = data;
      onAuthSuccess({ user, accessToken });
      toast.success("Login success");
    },
  });
};

export const useRegisterMutation = () => {
  const onAuthSuccess = useAuthStore((state) => state.onAuthSuccess);
  return useMutation<TData, AxiosError, TVarRegister, unknown>({
    mutationFn: (values) =>
      api.post("/auth/register", values).then((res) => res.data),
    onSuccess: (data) => {
      const { accessToken, user } = data;
      onAuthSuccess({ user, accessToken });
      toast.success("Regoster success");
    },
  });
};
