import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import httpClient from "./utils";

const Items = ({ items }) => {
  const res = useQuery({
    queryKey: ["tasks"],
    queryFn: () => httpClient.get(""),
  });
  console.log(res.data);

  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
