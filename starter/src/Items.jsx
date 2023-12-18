import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import httpClient from "./utils";

const Items = ({ items }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await httpClient.get("");
      return data;
    },
  });

  if (isLoading) {
    return <h4 style={{ marginTop: "2rem" }}>Loading...</h4>;
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
