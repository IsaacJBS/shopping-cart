import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid lightblue;
  border-radius: 20px;

  button {
    border-radius: 0 0 20px 20px;
  }

  image {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
