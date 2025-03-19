import ErrorBoundary from "../_components/ErrorBoundary";
import TodoListContainer from "../_components/TodoListContainer";

export default function Index() {
  return (
    <ErrorBoundary>
      <TodoListContainer />
    </ErrorBoundary>
  );
}
