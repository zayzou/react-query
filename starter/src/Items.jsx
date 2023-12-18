import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import httpClient from "./utils";

const Items = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await httpClient.get("");
      return data;
    },
  });

  if (isLoading) {
    return <h4 style={{ marginTop: "2rem" }}>Loading...</h4>;
  }
  // if (isError) {
  //   return (
  //     <h4 style={{ marginTop: "2rem", color: "red" }}>An error occurred</h4>
  //   );
  // }

  if (error) {
    return <h4 style={{ marginTop: "2rem", color: "red" }}>{error.message}</h4>;
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
