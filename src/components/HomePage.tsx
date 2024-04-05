import { useCallback, useMemo, useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function HomePage() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = useCallback((todo: string) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }, []);

  const handleEditTodo = useCallback((index: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? newText : todo))
    );
  }, []);

  const handleDeleteTodo = useCallback((index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }, []);

  const memoizedTodoListProps = useMemo(
    () => ({
      todos,
      onEditTodo: handleEditTodo,
      onDeleteTodo: handleDeleteTodo,
    }),
    [todos, handleEditTodo, handleDeleteTodo]
  );

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <h1 className="font-bold text-center text-3xl">
          iTask - Manage your todos at one place
        </h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>
        <h2 className="text-2xl font-bold">Your Todos</h2>
        <TodoList {...memoizedTodoListProps} />
      </div>
    </>
  );
}

export default HomePage;
