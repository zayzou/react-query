import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import httpClient from "./utils.js";
import { toast } from "react-toastify";

export const useFetchTask = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await httpClient.get("");
      return data;
    },
  });

  return { isLoading, data, error };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();
  const { mutate: updateTask } = useMutation({
    mutationFn: ({ id, isDone }) => httpClient.patch(`/${id}`, { isDone }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success(data.data.msg);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { updateTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: (id) => httpClient.delete(`/${id}`),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success(data.data.msg);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { deleteTask };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  //create an alias for mutate
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => httpClient.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task added !");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isLoading };
};
