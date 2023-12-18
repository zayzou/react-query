import { useMutation, useQueryClient } from "@tanstack/react-query";
import httpClient from "./utils";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient();
  const { mutate: updateTask } = useMutation({
    mutationFn: (id) => httpClient.patch(`/${id}`, { isDone: !item.isDone }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success(data.data.msg);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleEdit = (id) => {
    updateTask(id);
  };
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => handleEdit(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => console.log("delete task")}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
