import React, { useCallback, useMemo, useState } from "react";

interface TodoFormProps {
  onAddTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    if (todo.trim() !== "") {
      onAddTodo(todo);
      setTodo("");
    }
  }, [onAddTodo, todo]);

  return useMemo(
    () => (
      <div className="addTodo my-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Add a Todo</h2>
        <div className="flex">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-full rounded-full px-5 py-1"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold
        text-white"
          >
            Add
          </button>
        </div>
      </div>
    ),
    [handleChange, handleAdd, todo, onAddTodo]
  );
};

export default TodoForm;
