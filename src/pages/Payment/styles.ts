import styled from "styled-components";

export const ContainerPayment = styled.main`
  display: flex;

  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 160px;

  div {
    h1 {
      font-weight: 700;
      font-family: "Baloo 2";
      font-size: 1.125rem;
      color: ${(props) => props.theme["gray-800"]};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: column;

  width: 640px;

  margin-top: 15px;
  border-radius: 6px;

  background-color: ${(props) => props.theme["gray-100"]};

  header {
    display: flex;
    flex-direction: row;
    width: 100%;

    padding: 40px 40px 32px 40px;

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

    svg {
      color: ${(props) => props.theme["yellow-500"]};
    }
  }

  footer {
    padding: 32px 40px 40px 40px;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      select {
        background-color: ${(props) => props.theme["gray-200"]};
        height: 42px;

        border: 0;
        border-radius: 4px;

        font-family: "Roboto";
        font-weight: 400;
        font-size: 0.875rem;
        color: ${(props) => props.theme["gray-700"]};
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const TextInput = styled.input`
  background-color: ${(props) => props.theme["gray-200"]};

  height: 42px;
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
