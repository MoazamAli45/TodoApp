"use client";
import { useState } from "react";
import TodoList from "./../components/TodoList";
import NewTodo from "./../components/NewTodo";

// interface to tell the type in useState
interface Todo {
  id: string;
  text: string;
}

export default function Home() {
  const [todo, setTodo] = useState<Todo[]>([]);

  const submitTodoHandler = (text: string) => {
    // adding todo
    setTodo((pervTodo) => [
      ...pervTodo,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const deleteTodoHandler = (id: string) => {
    // changing in todo array
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  return (
    <main className="app">
      <NewTodo onAddTodo={submitTodoHandler} />
      <TodoList items={todo} onDeleteTodo={deleteTodoHandler} />
    </main>
  );
}
