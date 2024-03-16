import styled from "styled-components";

export const PomodoroStyled = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PomodoroTime = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #f50057;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

// export const PomodoroButton = styled.button`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background-color: #f50057;
//   color: white;
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   border: rebeccapurple;
//   outline: none;
//   transition: all 0.3s;
//   &:hover {
//     background-color: #ff0057;
//   }
// `;
