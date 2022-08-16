import Banner from "../../assets/banner.png";
import { FaShoppingCart } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { CgCoffee } from "react-icons/cg";
import { MdOutlineTimer } from "react-icons/md";

import {
  ContainerHome,
  ContainerHomeContents,
  IconContainer,
  ContainerHomeImage,
} from "./styles";

import { Menu } from "../../components/Menu";
import { useState } from "react";

export function Home() {
  const [total, setTotal] = useState(0);

  function controlTheQuantityOfItemsInTheCart(total: number) {
    setTotal(total);
  }
  return (
    <main>
      <ContainerHome>
        <ContainerHomeContents>
          <header>
            <h1>
              Encontre o café perfeito
              <br />
              para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a<br />
              qualquer hora.
            </p>
          </header>

          <footer>
            <div>
              <IconContainer color={"yellow-500"}>
                <FaShoppingCart />
              </IconContainer>

              <p>Compra simples e segura</p>
            </div>

            <div>
              <IconContainer color={"gray-600"}>
                <FiPackage />
              </IconContainer>

              <p>Embalagem mantém o café intacto</p>
            </div>

            <div>
              <IconContainer color={"yellow-400"}>
                <MdOutlineTimer />
              </IconContainer>

              <p>Entrega rápida e rastreada</p>
            </div>

            <div>
              <IconContainer color={"purble-500"}>
                <CgCoffee />
              </IconContainer>

              <p>O café chega fresquinho até você</p>
            </div>
          </footer>
        </ContainerHomeContents>

        <ContainerHomeImage>
          <img src={Banner} alt="" />
        </ContainerHomeImage>
      </ContainerHome>

      <Menu total={controlTheQuantityOfItemsInTheCart} />
    </main>
  );
}
