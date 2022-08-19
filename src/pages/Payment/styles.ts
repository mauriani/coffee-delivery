import styled from "styled-components";

export const ContainerPayment = styled.main`
  display: flex;

  flex: 1;
  flex-direction: row;

  padding: 0 10rem 15rem 10rem;

  form {
    display: flex;
    flex: 1;

    div {
      > h1 {
        font-weight: 700;
        font-family: "Baloo 2";
        font-size: 1.125rem;
        color: ${(props) => props.theme["gray-800"]};
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    padding: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;

  padding: 2.5rem 2.5rem 2rem 2.5rem;

  div {
    h2 {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme["gray-700"]};
    }

    p {
      font-weight: 400;
      font-size: 0.87rem;
      color: ${(props) => props.theme["gray-600"]};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;

  margin-top: 15px;
  border-radius: 6px;

  background-color: ${(props) => props.theme["gray-100"]};

  svg {
    color: ${(props) => props.theme["yellow-500"]};
  }

  footer {
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    footer {
      padding: 1.05rem;
    }
  }
`;

export const FormAddress = styled.footer`
  padding: 2rem 2.5rem 2.5rem 2.5rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    padding: 1.05rem;
  }
`;

export const TextInput = styled.input`
  background-color: ${(props) => props.theme["gray-200"]};

  height: 2.625rem;
  width: 100%;
  margin-bottom: 16px;
  margin-right: 10px;

  padding: 0 8px;

  border: 0;
  border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
  border-radius: 4px;

  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme["gray-700"]};
`;

export const ContainerFormOfPayment = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;

  margin-top: 15px;
  border-radius: 6px;

  background-color: ${(props) => props.theme["gray-100"]};

  svg {
    color: ${(props) => props.theme["purble-500"]};
  }

  > footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 2.5rem 2.5rem 2.5rem;

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1rem;

      border: 0;

      height: 3.19rem;
      width: 11.16rem;
      border-radius: 6px;

      background-color: ${(props) => props.theme["gray-300"]};

      font-weight: 400;
      font-size: 12px;
      text-transform: uppercase;

      svg {
        color: ${(props) => props.theme["purble-500"]};
        margin-right: 12px;
      }

      :focus {
        box-shadow: 0px 0px 0px 2px ${(props) => props.theme["purble-500"]};
      }

      :hover {
        background-color: ${(props) => props.theme["gray-400"]};
        transition: all 0.2s;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    footer {
      display: flex;
      flex-direction: column;

      button {
        margin-bottom: 16px;
      }
    }
  }
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 28rem;
  border-radius: 6px 44px;

  margin-top: 15px;
  margin-left: 32px;

  background-color: ${(props) => props.theme["gray-100"]};

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    align-items: center;
  }
`;

export const ContentProducts = styled.div`
  padding: 2.5rem;

  button {
    width: 23rem;
    height: 2.875rem;
    border-radius: 6px;

    font-weight: 700;
    font-size: 0.875rem;

    text-transform: uppercase;
    color: ${(props) => props.theme["white-000"]};
    border: 0;

    background-color: ${(props) => props.theme["yellow-400"]};

    :hover {
      background-color: ${(props) => props.theme["yellow-500"]};
      transition: all 0.2s;
    }
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 20px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 8px;
      color: ${(props) => props.theme["gray-700"]};
    }

    // div dos botões
    > div {
      flex-direction: row;
      justify-content: center;

      > button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-left: 4px;

        width: 5.69rem;
        height: 2rem;
        border: 0;
        border-radius: 6px;

        font-weight: 400;
        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${(props) => props.theme["gray-600"]};

        background-color: ${(props) => props.theme["gray-300"]};

        svg {
          color: ${(props) => props.theme["purble-500"]};
        }

        :focus {
          display: none;
        }

        :hover {
          background-color: ${(props) => props.theme["gray-400"]};
          transition: all 0.2s;
        }
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      color: ${(props) => props.theme["gray-600"]};
    }
  }

  @media (max-width: 768px) {
    header {
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        button {
          margin-top: 4px;
        }
      }
    }

    div {
      margin-left: 5px;
    }
  }
`;

export const ContentButtonAddRemove = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 4px;

  width: 4.5rem;
  height: 1.875rem;

  background-color: ${(props) => props.theme["gray-300"]};

  border-radius: 6px;

  padding: 1px;

  input {
    width: 50%;
    height: 100%;

    text-indent: 6px;
    font-size: 16px;

    border: 0;

    background-color: ${(props) => props.theme["gray-300"]};

    :focus {
      display: block;
      box-shadow: 0px 0px 0px 2px transparent;
    }
  }

  button {
    background-color: ${(props) => props.theme["gray-300"]};

    width: 30%;
    height: 100%;

    border: 0;

    :focus {
      display: block;
      box-shadow: 0px 0px 0px 2px transparent;
    }

    :hover {
      background-color: ${(props) => props.theme["gray-300"]};
    }

    svg {
      color: ${(props) => props.theme["purble-500"]};
    }
  }
`;

export const Line = styled.div`
  width: 23rem;
  border: 1px solid #e6e5e5;

  margin: 24px 0;
`;

export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 13px;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-600"]};
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;

      color: ${(props) => props.theme["gray-700"]};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
