import React from "react";
import "./TodoList.css";
type Props = {
  // items todo
  items: {
    id: string;
    text: string;
  }[];
  onDeleteTodo: (id: string) => void;
};

const TodoList = (props: Props) => {
  const { items } = props;
  const deleteHandler = (id: string) => {
    props.onDeleteTodo(id);
  };
  return (
    <ul>
      {items.length == 0 ? (
        <p className="todo-text"> No Todos Added Yet !</p>
      ) : (
        items.map(
          (todo) =>
            todo.text !== "" && (
              <li key={todo.id}>
                {todo.text}
                <span>
                  <button onClick={deleteHandler.bind(null, todo.id)}>
                    Delete
                  </button>
                </span>
              </li>
            )
        )
      )}
    </ul>
  );
};

export default TodoList;
