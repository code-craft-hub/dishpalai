import {
  getUserInfo,
  loginUserService,
  registerUserService,
} from "@/api/authApi";
import { loginCredentials, RegisterUserData } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const getUserInfoQuery = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => await getUserInfo(),
    refetchOnWindowFocus: false,
    retry: false,
    gcTime: 1 * 60 * 60 * 1000,
    staleTime: 1 * 60 * 60 * 1000,
  });
};

export const loginUserQuery = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, loginCredentials>({
    mutationFn: async (value: loginCredentials) =>
      await loginUserService(value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
  });
};

export const registerUserQuery = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, RegisterUserData>({
    mutationFn: async (value) => await registerUserService(value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
  });
};