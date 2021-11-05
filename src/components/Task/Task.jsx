import { TaskWrapper, TaskText, DelButton, Date } from "./Task.styles";
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../../store/todo/actions";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(task.id));
  };

  const handleComplete = () => {
    dispatch(completeTodo(task.id));
  };

  return (
    <TaskWrapper isCompleted={task.isCompleted}>
      <input
        onChange={handleComplete}
        type="checkbox"
        checked={task.isCompleted}
      />
      <Date>{task.date}</Date>
      <TaskText>{task.text}</TaskText>
      <DelButton onClick={handleRemove}>x</DelButton>
    </TaskWrapper>
  );
};
