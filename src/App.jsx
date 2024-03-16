import "./App.css";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh] bg-gradient-to-tr from-slate-300 to-pink-200 gap-2">
        <TodoList />
        <Pomodoro />
      </div>
    </>
  );
}

export default App;
