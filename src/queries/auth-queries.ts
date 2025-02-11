import { getUserInfo, loginService } from "@/api/authApi";
import { loginCredentials } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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

export const loginInUser = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, loginCredentials>({
    mutationFn: async (value: loginCredentials) => await loginService(value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
    onError: (error: any) => {
      console.error(error);
      toast.error("Incorrect Email or Password");
    },
  });
};

// console.log(googleCredentials.current)
// registerUser(googleCredentials).then(() =>
//   loginUser(restOfLoginCredentials).then(() => {
//     navigate("/dashboard", { replace: true });
//   })
// );
