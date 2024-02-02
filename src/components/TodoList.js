import React from "react";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      <SingleTodo />
    </div>
  );
};

export default TodoList;
