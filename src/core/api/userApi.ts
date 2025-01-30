import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface User {
  id: string;
  name: string;
  email: string;
}

// Fetch a user by ID
const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};

// Update a user
const updateUser = async (user: Partial<User>): Promise<User> => {
  const response = await fetch(`/api/users/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error("Failed to update user");
  return response.json();
};

// Custom hook to fetch user
export const useGetUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id], // Cache key
    queryFn: () => fetchUser(id),
  });
};

// Custom hook to update user
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (updatedUser) => {
      // Invalidate the user query to refetch updated data
      queryClient.invalidateQueries({ queryKey: ["user", updatedUser.id] });
    },
  });
};
