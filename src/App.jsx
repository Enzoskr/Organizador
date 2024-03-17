import "./App.css";
import Calendario from "./components/Calendario/Calendario";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-gradient-to-tr from-slate-300 to-pink-200 gap-5">
        <div className="flex flex-wrap gap-5">
          <Pomodoro />
          <Calendario />
        </div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
