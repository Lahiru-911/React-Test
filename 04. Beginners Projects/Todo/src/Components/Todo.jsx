import React from "react";

const Todo = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[650px] h-96 bg-[#fcfff3] rounded-lg shadow-lg flex justify-center items-center">
        <input
          type="text"
          // value={input}
          // onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />
        <button class="rounded-full bg-[#454545] text-white px-6 py-2 outline-none border-none cursor-pointer">
          Submit
        </button>

        <ul className=""></ul>
      </div>
    </div>
  );
};

export default Todo;
