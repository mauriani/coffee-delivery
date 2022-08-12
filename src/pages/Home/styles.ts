import styled from "styled-components";
import background from "../../assets/Background.svg";

interface IconProps {
  color: "yellow-500" | "yellow-400" | "gray-600" | "purble-500";
}

export const ContainerHome = styled.div`
  height: 34rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-image: url(${background});

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerHomeContents = styled.div`
  //margin-right: 3.5rem;

  header {
    h1 {
      font-weight: 800;
      font-family: "Baloo 2";
      font-size: 3rem;
      color: ${(props) => props.theme["gray-800"]};
    }

    p {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      margin-top: 16px;

      color: ${(props) => props.theme["gray-700"]};
    }
  }

  > footer {
    margin-top: 66px;

    width: 37.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      width: 18.375rem;
      height: 2rem;

      margin-bottom: 20px;

      p {
        font-weight: 400;
        font-size: 1rem;
        margin-left: 12px;
        color: ${(props) => props.theme["gray-600"]};
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

export const IconContainer = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  width: 2rem;

  border-radius: 50%;

  background-color: ${(props) => props.theme[props.color]};

  svg {
    color: ${(props) => props.theme["white-000"]};
  }
`;

export const ContainerHomeImage = styled.div`
  width: 29.75rem;
  height: 22.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
