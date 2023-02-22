import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const Main = styled.main`
  width: calc(100% - 12rem);
  height: calc(100% - 10rem);
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -2px 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
