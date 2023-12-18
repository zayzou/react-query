import SingleItem from "./SingleItem";
import { useFetchTask } from "./reactQueryCustomHooks";

const Items = () => {
  const { isLoading, data, error } = useFetchTask();
  if (isLoading) {
    return <h4 style={{ marginTop: "2rem" }}>Loading...</h4>;
  }
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
