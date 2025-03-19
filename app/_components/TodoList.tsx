"use client";
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, i) => (
          <li key={`${todo.id}-${i}`}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
