export const sortTodos = (todos) => {
  return todos
    .filter((item) => !item.isCompleted)
    .concat(todos.filter((item) => item.isCompleted));
};
