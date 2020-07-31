import React, { useState, useEffect } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const todoList = [
      { id: 1, title: "Work hard" },
      { id: 2, title: "Do more" },
      { id: 3, title: "Happy" },
    ];
    return todoList;
  });

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function featchPostList() {
      try {
        const urlRequest =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(urlRequest);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("Featch fail:", error.message);
      }
    }

    featchPostList();
  }, []);

  function handleTodoClick(todo) {
    const indexRemove = todoList.findIndex((x) => x.id === todo.id);

    if (indexRemove < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(indexRemove, 1);
    setTodoList(newTodoList);
  }

  function handleSubmit(formValue) {
    const newId = todoList.reduce((s, c) => {
      return s > c.id ? s + 1 : c.id + 1;
    }, 0);
    const newTodo = {
      id: newId,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>Huy React Hook</h1>
      {/* <ColorBox></ColorBox> */}
      {/* <TodoForm onSubmitForm={handleSubmit}></TodoForm> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList> */}
      <PostList posts={postList}></PostList>
    </div>
  );
}

export default App;
