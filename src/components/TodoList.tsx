import React, { useCallback, useState } from "react";

interface TodoListProps {
  todos: string[];
  onEditTodo: (index: number, newText: string) => void;
  onDeleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onEditTodo,
  onDeleteTodo,
}) => {
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [editText, setEditText] = useState<string>("");

  const handleEdit = useCallback((index: number, todo: string) => {
    setEditIndex(index);
    setEditText(todo);
  }, []);

  const handleSaveEdit = useCallback(
    (index: number) => {
      onEditTodo(index, editText);
      setEditIndex(-1);
      setEditText("");
    },
    [editText, onEditTodo]
  );

  const handleDelete = useCallback(
    (index: number) => {
      if (window.confirm("Are you sure you want to delete this todo?")) {
        onDeleteTodo(index);
      }
    },
    [onDeleteTodo]
  );

  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <div key={index} className="todo flex w-1/4 my-3 justify-between">
          {editIndex === index ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSaveEdit(index);
                }
              }}
            />
          ) : (
            <div className="text" onClick={() => handleEdit(index, todo)}>
              {todo}
            </div>
          )}
          <div className="buttons">
            {editIndex === index ? (
              <button
                onClick={() => handleSaveEdit(index)}
                className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
              >
                Save
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleEdit(index, todo)}
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
