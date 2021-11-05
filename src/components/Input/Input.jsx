import { useState } from "react";
import { StyledInput } from "./Input.styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo/actions";
import { nanoid } from "nanoid";

export const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (e.code === "Enter" && value) {
      const newTodo = {
        text: value,
        isCompleted: false,
        id: nanoid(),
        date: new Date().toISOString().slice(0, 10),
      };
      dispatch(addTodo(newTodo));
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};
