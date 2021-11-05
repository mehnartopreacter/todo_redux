import { nanoid } from "nanoid";

export const initTasks = [
  {
    text: "В вдх ныт",
    isCompleted: false,
    id: nanoid(),
    date: new Date().toISOString().slice(0, 10),
  },
  {
    text: "Реакт с некст недели учит",
    isCompleted: false,
    id: nanoid(),
    date: new Date(new Date().setDate(new Date().getDate() + 7))
      .toISOString()
      .slice(0, 10),
  },
  {
    text: "Пук сренькат",
    isCompleted: false,
    id: nanoid(),
    date: new Date().toISOString().slice(0, 10),
  },
  {
    text: "В доту играт",
    isCompleted: true,
    id: nanoid(),
    date: new Date().toISOString().slice(0, 10),
  },
];
