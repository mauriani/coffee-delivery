import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 100%;
  > h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;

    padding: 0 6rem;

    color: ${(props) => props.theme["gray-700"]};
    margin-bottom: 54px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;

  padding: 0 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  width: 16rem;
  height: 19.5rem;
  border-radius: 6px 36px;

  background-color: ${(props) => props.theme["gray-100"]};

  margin-bottom: 40px;

  img {
    margin-top: -20px;
  }

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;

    width: 100%;
    font-size: 1.25rem;
    text-align: center;

    color: ${(props) => props.theme["gray-700"]};
  }

  p {
    text-align: center;
    color: ${(props) => props.theme["gray-500"]};
    font-weight: 400;
    font-size: 0.875rem;
    padding: 0 20px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;

  margin-top: 12px;
  margin-bottom: 16px;

  > span {
    text-align: center;
    text-transform: uppercase;

    background-color: ${(props) => props.theme["yellow-100"]};
    padding: 4px 8px;
    border-radius: 100px;

    color: ${(props) => props.theme["yellow-500"]};
    font-size: 10px;
    font-weight: 700;
  }
`;

export const ContentPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: 33px;
  width: 100%;

  > span {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;

    font-size: 24px;

    color: ${(props) => props.theme["gray-600"]};
  }

  div {
    background-color: ${(props) => props.theme["gray-300"]};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 8px 4px;

    border-radius: 6px;

    input {
      width: 30px;
      height: 100%;

      text-indent: 6px;
      font-size: 16px;

      border: 0;

      margin: 0 4px;

      background-color: ${(props) => props.theme["gray-300"]};
    }

    button {
      background-color: ${(props) => props.theme["gray-300"]};

      width: 100%;
      height: 100%;
      border: 0;

      svg {
        color: ${(props) => props.theme["purble-500"]};
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const Icon = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["purble-700"]};

  svg {
    color: ${(props) => props.theme["white-000"]};
  }

  :hover {
    background-color: ${(props) => props.theme["purble-500"]};
  }
`;
