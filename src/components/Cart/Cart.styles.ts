import styled from "styled-components";
import { Button } from "@mui/material";

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

export const StyledButton = styled(Button)`
  color: white;
  background-color: red;
  &:hover {
    background-color: #f74f4f;
  }
`;
