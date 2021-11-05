import { initTasks } from "../../fixtures/initialTodo";
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "./actions";
import { sortTodos } from "../../utils/utils";

const initialState = {
  todos: initTasks,
};

const handleAddTodo = (state, action) => {
  return { ...state, todos: sortTodos(state.todos.concat([action.payload])) };
};

const handleRemoveTodo = (state, action) => {
  return {
    ...state,
    todos: state.todos.filter((item) => item.id !== action.payload),
  };
};

const handleCompleteTodo = (state, action) => {
  return {
    ...state,
    todos: sortTodos(
      state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    ),
  };
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return handleAddTodo(state, action);
    case REMOVE_TODO:
      return handleRemoveTodo(state, action);
    case COMPLETE_TODO:
      return handleCompleteTodo(state, action);
    default: {
      return state;
    }
  }
};
