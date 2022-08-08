import { Container, ContainerCart, ButtonTotalCart } from "./styles";
import { MdLocationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

import logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />

      <ContainerCart>
        <div>
          <MdLocationOn size={22} />
          Porto Alegre, RS
        </div>

        <ButtonTotalCart>
          <FaShoppingCart size={22} />
        </ButtonTotalCart>
      </ContainerCart>
    </Container>
  );
}
