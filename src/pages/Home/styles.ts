import { styled } from "styled-components";

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.5rem;
  }
`;

export const BaseCountDownButton = styled.button`
  padding: 1rem;
  border: 0;
  width: 100%;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  font-weight: bold;

  color: ${(props) => props.theme["gray-100"]};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StopCountDownButton = styled(BaseCountDownButton)`
  background-color: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["red-700"]};
  }
`;

export const StartCountDownButton = styled(BaseCountDownButton)`
  background-color: ${(props) => props.theme["green-500"]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;
