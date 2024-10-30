import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Adjust height as needed */
`;

export const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 8px solid #3498db; /* Change color as needed */
  width: 50px; /* Size of the spinner */
  height: 50px; /* Size of the spinner */
  animation: ${spin} 1s linear infinite;
`;
