import styled from "styled-components";

interface IconProps {
  color: "yellow-500" | "yellow-400" | "purble-500";
}

export const ContainerSuccess = styled.main`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  > div {
    padding: 0 10rem;
    h1 {
      font-family: "Baloo 2";
      font-style: normal;
      font-weight: 800;

      font-size: 2rem;

      color: ${(props) => props.theme["yellow-500"]};
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    div {
      padding: 1rem;
    }
  }
`;

export const ContentSuccess = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0 10rem;

  margin-top: 40px;

  img {
    width: 30.75rem;
    height: 18.313rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 32.875rem;

    border-radius: 6px 36px;
    padding: 2.5rem;

    border-radius: 6px 36px;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.theme["purble-500"]};

    div {
      border: 0;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: row;

      p {
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme["gray-600"]};

        span {
          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    padding: 1rem;
  }
`;

export const IconContainer = styled.button<IconProps>`
  border: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  margin-right: 8px;

  height: 2rem;
  width: 2rem;

  background-color: ${(props) => props.theme[props.color]};
  border-radius: 1000px;

  svg {
    color: ${(props) => props.theme["white-000"]};
  }
`;
