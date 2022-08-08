import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 100%;
  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;

    padding: 0 6rem;

    color: ${(props) => props.theme["gray-700"]};
  }
`;
