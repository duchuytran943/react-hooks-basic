import React, { useState, useEffect } from "react";
import queryString from "query-string";

import "./HomePage.scss";
import ColorBox from "../../components/ColorBox";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
import PostList from "../../components/PostList";
import Pagination from "../../components/Pagination";
import PostFiltersForm from "../../components/PostFiltersForm";
import Clock from "../../components/Clock";
import BetterClock from "../../components/BetterClock";
import MagicBox from "../../components/MagicBox";

function HomePage() {
  const [todoList, setTodoList] = useState(() => {
    const todoList = [
      { id: 1, title: "Work hard" },
      { id: 2, title: "Do more" },
      { id: 3, title: "Happy" },
    ];
    return todoList;
  });

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    title_like: "",
  });

  const paramaterQuery = queryString.stringify(filters);

  useEffect(() => {
    async function featchPostList() {
      try {
        const urlRequest = `http://js-post-api.herokuapp.com/api/posts?${paramaterQuery}`;
        const response = await fetch(urlRequest);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Featch fail:", error.message);
      }
    }

    featchPostList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

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

  function handlePageChange(newPage) {
    setFilters({ ...filters, _page: newPage });
  }

  function handleChangeFilters(newFilters) {
    setFilters({ ...filters, _page: 1, title_like: newFilters });
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="home-page">
      {showClock && <Clock></Clock>}
      <BetterClock></BetterClock>
      <button onClick={() => setShowClock(!showClock)}>Hide clock</button>
      <MagicBox></MagicBox>
      <ColorBox></ColorBox>
      <TodoForm onSubmitForm={handleSubmit}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
      <PostFiltersForm onSubmit={handleChangeFilters}></PostFiltersForm>
      <PostList posts={postList}></PostList>
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination>
    </div>
  );
}

export default HomePage;
