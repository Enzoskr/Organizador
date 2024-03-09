import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh] bg-gradient-to-tr from-slate-300 to-pink-200">
        <TodoList />
      </div>
    </>
  );
}

export default App;
