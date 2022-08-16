import styled from "styled-components";

export const ContainerSuccess = styled.main`
  display: flex;
  flex-direction: column;

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
`;

export const ContentSuccess = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0 10rem;

  margin-top: 40px;

  img {
    width: 30.75rem;
    height: 18.313rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 526px;
    height: 270px;

    border-radius: 6px 36px;

    border: 1px solid;

    border-image: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;
