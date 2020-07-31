import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const todoList = [
      { id: 1, title: "Lam viec nha" },
      { id: 2, title: "Lam viec nha 2" },
      { id: 3, title: "Lam viec nha 3" },
    ];
    return todoList;
  });

  function handleTodoClick(todo) {
    const indexRemove = todoList.findIndex((x) => x.id === todo.id);

    if (indexRemove < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(indexRemove, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>Huy React Hook</h1>
      <ColorBox></ColorBox>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
    </div>
  );
}

export default App;
