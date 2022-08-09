import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

// Set onAddTodo as a function that will receive a text type string - returns nothing
const NewTodo: React.FC = () => {
  // Tap into Todos context
  const todosCtx = useContext(TodosContext);
  // Set type to useRef to HTML input element and with an initial value of null
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    // To connect to App.tsx
    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Introduce a To-do</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add To-do</button>
    </form>
  );
};

export default NewTodo;
