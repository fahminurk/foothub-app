import api from "@/lib/axios";
import { User, useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

type TData = {
  accessToken: string;
  user: User;
};

export const useUpdateProfileMutation = () => {
  const { onAuthSuccess, user } = useAuthStore();
  return useMutation<TData, AxiosError<{ message: string }>, FormData, unknown>(
    {
      mutationFn: (values) =>
        api.patch("/user/" + user?.id, values).then((res) => res.data),
      onSuccess: (data) => {
        const { accessToken, user } = data;
        onAuthSuccess({ user, accessToken });
        toast.success("successfully updated profile");
      },
      onError: (error) => {
        toast.error(error.response?.data.message);
      },
    }
  );
};
