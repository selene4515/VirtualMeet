import styled from "styled-components";

export const BtnBgGrayFontColor = styled.button`
  padding: 0.625rem;
  gap: 0.625rem;
  margin: 1.5rem;

  width: 18.75rem;
  height: 2.9375rem;

  background: #171a1c;
  border-radius: 0.625rem;

  font-weight: 700;
  font-size: 1rem;

  color: ${(props) => props.color || "#FFFFFF"}; ;
`;
