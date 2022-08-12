import styled from "styled-components";

import { LinkProps } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 6.5rem;
  padding: 2rem 10rem;

  img {
    height: 2.5rem;
    width: 5.309rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-bottom: 10px;
    }
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  height: 38px;

  > div {
    display: flex;
    align-items: center;

    border-radius: 6px;

    background-color: ${(props) => props.theme["purble-100"]};

    width: 8.938rem;
    height: 2.375rem;

    color: ${(props) => props.theme["purble-700"]};
    font-weight: 400;
    font-size: 0.875rem;

    svg {
      color: ${(props) => props.theme["purble-700"]};
    }
  }
`;

export const ButtonTotalCart = styled.button<LinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;
  border: 0;

  border-radius: 6px;

  margin-left: 12px;

  background-color: ${(props) => props.theme["yellow-100"]};

  svg {
    color: ${(props) => props.theme["yellow-500"]};
  }
`;

export const TotalCart = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  width: 20px;
  height: 20px;

  background: ${(props) => props.theme["yellow-500"]};

  top: 20px;

  border-radius: 100%;

  color: ${(props) => props.theme["white-000"]};
  font-size: 12px;
  font-weight: 700;
`;
