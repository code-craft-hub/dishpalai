import { getUserInfo } from "@/api/authApi";
import { useQuery } from "@tanstack/react-query";

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
