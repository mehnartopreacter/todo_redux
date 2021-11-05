const sliceName = "todo";

export const ADD_TODO = `${sliceName}/ADD_TODO`;
export const REMOVE_TODO = `${sliceName}/REMOVE_TODO`;
export const COMPLETE_TODO = `${sliceName}/COMPLETE_TODO`;

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: todoId,
  };
};

export const completeTodo = (todoId) => {
  return {
    type: COMPLETE_TODO,
    payload: todoId,
  };
};
