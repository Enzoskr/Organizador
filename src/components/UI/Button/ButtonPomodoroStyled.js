import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  border-radius: ${({ radius }) => `${radius}px`};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f50057;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: rebeccapurple;
  outline: none;
  transition: all 0.3s;
  font-weight: 700;

  &:hover {
    background-color: #ff0057;
    box-shadow: 3px 3px 0 #000000;
  }
  /* :hover {
    background-color: #d64b2b;
  } */
`;
