import { Input } from "../Input/Input";
import { ListWrapper, TasksList } from "./List.styles";
import { Task } from "../Task/Task";
import { useSelector } from "react-redux";

export const List = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <ListWrapper>
      <Input />
      <TasksList>
        {todos.map((item) => {
          return <Task task={item} key={item.id} />;
        })}
      </TasksList>
    </ListWrapper>
  );
};
