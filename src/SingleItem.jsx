import { useDeleteTask, useEditTask } from "./reactQueryCustomHook";

const SingleItem = ({ item }) => {
  // Mutations
  const { editTask } = useEditTask();
  const { deleteTask, deleteTaskLoading } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ TaskId: item.id, isDone: !item.isDone })}
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
        onClick={() => deleteTask({ TaskId: item.id })}
        disabled={deleteTaskLoading}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
