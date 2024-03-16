import React from "react";
import styled from "styled-components";

const PlayButton = () => {
  return (
    <StyledButtonPlay>
      <div className="play-button">
        <div className="left"></div>
        <div className="right"></div>
        <div className="triangle-1"></div>
        <div className="triangle-2"></div>
      </div>
    </StyledButtonPlay>
  );
};

export default PlayButton;

const StyledButtonPlay = styled.div`
  .play-button {
    height: 30px; /* Ajusta la altura del botón */
    width: 30px; /* Ajusta el ancho del botón */
    display: block;
    margin: 20px auto; /* Ajusta el margen */
    overflow: hidden;
    position: relative;
  }

  .left {
    height: 100%;
    float: left;
    background-color: white;
    width: 36%;
    transition: all 0.25s ease;
    overflow: hidden;
  }

  .triangle-1 {
    transform: translate(0, -100%);
  }

  .triangle-2 {
    transform: translate(0, 100%);
  }

  .triangle-1,
  .triangle-2 {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    width: 0;
    height: 0;
    border-right: 15px solid #c0392b; /* Ajusta el ancho del triángulo */
    border-top: 7.5px solid transparent; /* Ajusta la altura del triángulo */
    border-bottom: 7.5px solid transparent; /* Ajusta la altura del triángulo */
    transition: transform 0.25s ease;
  }

  .right {
    height: 100%;
    float: right;
    width: 36%;
    background-color: white;
    transition: all 0.25s ease;
  }

  .paused {
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
    .triangle-1 {
      transform: translate(0, -50%);
    }
    .triangle-2 {
      transform: translate(0, 50%);
    }
  }
`;
