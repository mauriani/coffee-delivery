import { MdLocationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";

import { Container, ContainerCart, ButtonTotalCart, TotalCart } from "./styles";

interface PropsHeader {
  totalCart: number;
}

export function Header({ totalCart }: PropsHeader) {
  return (
    <Container>
      <img src={logo} alt="" />

      <ContainerCart>
        <div>
          <MdLocationOn size={22} />
          Porto Alegre, RS
        </div>

        <ButtonTotalCart type="button" component={Link} to={"/payment"}>
          <FaShoppingCart size={22} />
          {totalCart > 0 && <TotalCart>{totalCart}</TotalCart>}
        </ButtonTotalCart>
      </ContainerCart>
    </Container>
  );
}
