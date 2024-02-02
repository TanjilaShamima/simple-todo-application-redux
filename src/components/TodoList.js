'use client';
import React from "react";
import SingleTodo from "./SingleTodo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const state = useSelector(state => state.todos);

  console.log("state", state);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      {
        state?.map((todo) => {
          return (
            <SingleTodo key={todo.id} todo={todo} />
          );
        })
      }
    </div>
  );
};

export default TodoList;
