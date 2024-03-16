import React, { useEffect, useState } from "react";
import {
  ContainerButton,
  // ButtonPomodoro ,
  PomodoroStyled,
  PomodoroTime,
} from "./PomodoroStyled";

import { SlRefresh } from "react-icons/sl";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import ButtonPomodoro from "../UI/Button/ButtonPomodoro";

function Pomodoro() {
  const [pomodoroState, setPomodoroState] = useState({
    TotalTime: 25 * 60,
    TimeLeft: 25 * 60,
    isWorking: true,
    isRunning: false,
    isPaused: true,
  });

  const startFiveMinuteTimer = () => {
    setPomodoroState({
      ...pomodoroState,
      TotalTime: 5 * 60,
      TimeLeft: 5 * 60,
      isPaused: true,
      isRunning: false,
      isWorking: true,
    });
  };

  const startTimer = () => {
    setPomodoroState({
      ...pomodoroState,
      isRunning: true,
      isPaused: false,
    });
  };

  const pauseTimer = () => {
    setPomodoroState({
      ...pomodoroState,
      isRunning: false,
      isPaused: true,
    });
  };

  const resetTimer = () => {
    setPomodoroState({
      TotalTime: 25 * 60,
      TimeLeft: 25 * 60,
      isWorking: true,
      isRunning: false,
      isPaused: true,
    });
  };

  const toggleInterval = () => {
    if (!pomodoroState.isRunning && pomodoroState.isPaused) {
      startTimer();
    }
    setPomodoroState({
      ...pomodoroState,
      TimeLeft: pomodoroState.isWorking ? 5 * 60 : 25 * 60,
      isWorking: !pomodoroState.isWorking,
      isPaused: !pomodoroState.isPaused,
    });
  };

  const formatTime = (timeSeconds) => {
    const minutes = Math.floor(timeSeconds / 60);
    const seconds = timeSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  useEffect(() => {
    let interval;

    if (pomodoroState.isRunning && pomodoroState.TimeLeft > 0) {
      interval = setInterval(() => {
        setPomodoroState((prevState) => ({
          ...prevState,
          TimeLeft: prevState.TimeLeft - 1,
        }));
      }, 1000);
    } else if (pomodoroState.TimeLeft === 0) {
      setPomodoroState((prevState) => ({
        ...prevState,
        isRunning: false,
        isPaused: true,
      }));
    }
    return () => clearInterval(interval);
  }, [pomodoroState.isRunning, pomodoroState.TimeLeft]);

  return (
    <PomodoroStyled>
      <PomodoroTime>{formatTime(pomodoroState.TimeLeft)}</PomodoroTime>
      <ContainerButton>
        <ButtonPomodoro onClick={resetTimer}>
          <SlRefresh className="font-bold" />
        </ButtonPomodoro>
        <ButtonPomodoro
          onClick={pomodoroState.isPaused ? startTimer : pauseTimer}
        >
          {pomodoroState.isPaused ? <IoIosPlay /> : <IoIosPause />}
        </ButtonPomodoro>
        <ButtonPomodoro
          onClick={startFiveMinuteTimer}
          disabled={pomodoroState.isRunning}
        >
          +5
        </ButtonPomodoro>
      </ContainerButton>
    </PomodoroStyled>
  );
}

export default Pomodoro;
