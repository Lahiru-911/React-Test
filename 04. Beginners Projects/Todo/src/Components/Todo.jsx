import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]); // Fixed variable name
  const [input, setInput] = useState("");

  // Generate a unique ID for each todo item
  const generateId = () => Math.random().toString(36).substr(2, 9);

  const handleSubmit = () => {
    if (input.trim() === "") return; // Prevent adding empty todos
    setTodos((prevTodos) =>
      prevTodos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#f5f9eb]">
      <div className="w-[650px] bg-[#fcfff3] rounded-lg shadow-lg p-6">
        {/* Input and Button */}
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="New Todo"
            className="flex-1 p-2 border border-gray-300 rounded-l"
          />
          <button
            className="rounded-r bg-[#454545] text-white px-4 py-2 cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {/* Todos List */}
        <ul>
          {todos.map(({ text, id }) => (
            <li
              key={id}
              className="flex justify-between items-center bg-[#f5f9eb] p-3 my-2 rounded shadow"
            >
              <span>{text}</span>
              <button
                onClick={() => removeTodo(id)}
                className="text-white bg-red-500 px-3 py-1 rounded cursor-pointer"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
