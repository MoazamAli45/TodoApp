import React, { EventHandler } from "react";
import { useRef } from "react";
import "./NewTodo.css";

type Props = {
  // as props will be function
  onAddTodo: (text: string) => void;
};

const NewTodo = (props: Props) => {
  const inputText = useRef<HTMLInputElement>(null);

  // form event type

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputText.current!.value; // as it can be null ! this tells it can't be null

    props.onAddTodo(enteredText);
    inputText.current!.value = "";
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo">Todo</label>
        <input type="text" id="todo" ref={inputText} />
        <button className="mt-[1rem]">Add Todo</button>
      </div>
    </form>
  );
};

export default NewTodo;
