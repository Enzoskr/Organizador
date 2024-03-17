import React, { useEffect, useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

function TodoList() {
  const [value, setValue] = useState("");
  const [allTask, setAllTask] = useState([]);

  const handleSaveTask = () => {
    if (value.length < 1) {
      return true;
    }
    const data = localStorage.getItem("task");
    if (data) {
      localStorage.setItem(
        "task",
        JSON.stringify([...JSON.parse(data), value])
      );
    } else {
      localStorage.setItem("task", JSON.stringify([value]));
    }
    getTask();
    setValue("");
  };

  const getTask = () => {
    const data = localStorage.getItem("task");
    if (data) {
      setAllTask(JSON.parse(data));
    } else {
      setAllTask([]);
    }
  };
  useEffect(() => {
    getTask();
  }, []);

  const handleRemoveTask = (id) => {
    const removeTask = allTask.filter((task, index) => index !== id);
    localStorage.setItem("task", JSON.stringify(removeTask));
    setAllTask(removeTask);
    getTask();
  };

  const handleRemoveAllTask = () => {
    localStorage.removeItem("task");
    getTask();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSaveTask();
    }
  };

  return (
    <div className="w-[1100px] h-[400px] bg-slate-200 rounded-md p-5">
      <p className="text-2xl font-medium text-center"> Tareitas</p>
      <div className="flex flex-col mt-5">
        <div className="flex">
          <input
            type="text"
            className="w-full h-10 border border-sky-500 rounded-md pl-2 mr-2 outline-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div
            className="flex justify-center items-center w-12 h-10 bg-purple-300 hover:bg-purple-400 transition-all rounded-md cursor-pointer"
            onClick={handleSaveTask}
          >
            <MdOutlineAdd size={30} className="text-white" />
          </div>
        </div>
        <div className="w-full h-[200px] overflow-y-auto mt-5">
          {allTask.length > 0 &&
            allTask.map((task, index) => (
              <div
                className="w-full flex justify-between items-center bg-purple-200 rounded-md p-2 mt-2 group"
                key={index}
              >
                <p className="w-[100%_-_2rem]">{task}</p>

                <div
                  className=" flex justify-center items-center w-10 h-10 rounded-full bg-gray-100 group"
                  onClick={() => handleRemoveTask(index)}
                >
                  <IoTrashOutline
                    size={20}
                    className="w-10 text-purple-300 hover:text-red-500 cursor-pointer group transition-all"
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="w-full flex justify-between content-center mt-5 text-center">
          <span className="">Tienes Pendiente {allTask.length} tareas </span>
          <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-red-700 transition-all">
            <IoTrashOutline
              size={20}
              className="w-12 text-purple-300 hover:text-white group transition-all cursor-pointer"
              onClick={handleRemoveAllTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
