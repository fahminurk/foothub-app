import api from "@/lib/axios";
import { User, useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return useMutation<
    TData,
    AxiosError<{ message: string }>,
    TVarLogin,
    unknown
  >({
    mutationFn: (values) =>
      api.post("/auth/login", values).then((res) => res.data),
    onSuccess: (data) => {
      console.log(data);
      const { accessToken, user } = data;
      onAuthSuccess({ user, accessToken });
      router.push("/");
      toast.success("Login success");
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};

export const useRegisterMutation = () => {
  const onAuthSuccess = useAuthStore((state) => state.onAuthSuccess);
  const router = useRouter();
  return useMutation<
    TData,
    AxiosError<{ message: string }>,
    TVarRegister,
    unknown
  >({
    mutationFn: (values) =>
      api.post("/auth/register", values).then((res) => res.data),
    onSuccess: (data) => {
      const { accessToken, user } = data;
      onAuthSuccess({ user, accessToken });
      router.push("/");
      toast.success("Register success");
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};
