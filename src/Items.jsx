import SingleItem from "./SingleItem";
import { useFecthTasks } from "./reactQueryCustomHook";
const Items = () => {
  const { data, isLoading, isError } = useFecthTasks();
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}></p>;
  }

  if (isError) {
    return <p style={{ marginTop: "1rem" }}>Error fetching data</p>;
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
