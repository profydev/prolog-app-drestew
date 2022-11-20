import styled from "styled-components";
import { theme } from "@styles/theme";

const Spinner = styled.div`
  background-color: ${theme.color.primary["800"]};
  height: 10rem;
  width: 10rem;
`;

export function LoadingSpinner() {
  return <Spinner />;
}
