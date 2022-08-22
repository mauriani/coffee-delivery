import { useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import { CartContext } from "../../contexts/CartContext";

import { Container, ContainerCart, ButtonTotalCart, TotalCart } from "./styles";

export function Header() {
  const { totalCart } = useContext(CartContext);

  const navigate = useNavigate();

  function handleNavigateToHome() {
    navigate("/");
  }

  function handleNavigateToPayment() {
    navigate("/payment");
  }
  return (
    <Container>
      <button onClick={handleNavigateToHome}>
        <img src={logo} alt="" />
      </button>

      <ContainerCart>
        <div>
          <MdLocationOn size={22} />
          Porto Alegre, RS
        </div>

        <ButtonTotalCart type="button" onClick={handleNavigateToPayment}>
          <FaShoppingCart size={22} />
          {totalCart > 0 && <TotalCart>{totalCart}</TotalCart>}
        </ButtonTotalCart>
      </ContainerCart>
    </Container>
  );
}
