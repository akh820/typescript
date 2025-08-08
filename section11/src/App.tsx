import { useEffect } from "react";
import "./App.css";
import Editor from "./component/Editor";
import TodoItems from "./component/TodoItems";
import { TodoDispatchContext, TodoStateContext } from "./contexts/index";
import { useTodo } from "./hooks/useTodo";

function App() {
  const { todos, onClickAdd, onClickDelete } = useTodo();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>ToDo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={{
            onClickAdd,
            onClickDelete,
          }}
        >
          <Editor />
          <div>
            {todos.map((todo) => (
              <TodoItems key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
