import { MdLocationOn } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { ContainerSuccess, ContentSuccess, IconContainer } from "./styles";

import delivery from "../../assets/delivery.svg";

export function PaymentSuccess() {
  return (
    <ContainerSuccess>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <ContentSuccess>
        <div>
          <div>
            <IconContainer color={"purble-500"}>
              <MdLocationOn />
            </IconContainer>
            <p>
              Entrega em <span>Rua João Daniel Martinelli, 102</span>
              <br /> Farrapos - Porto Alegre, RS
            </p>
          </div>

          <div>
            <IconContainer color={"yellow-400"}>
              <MdOutlineTimer size={16} />
            </IconContainer>

            <p>
              Previsão de entrega
              <br />
              <span>20 min - 30 min</span>
            </p>
          </div>

          <div>
            <IconContainer color={"yellow-500"}>
              <MdLocationOn size={16} />
            </IconContainer>
            <p>
              Pagamento na entrega
              <br />
              <span>Cartão de Crédito</span>
            </p>
          </div>
        </div>
        <img src={delivery} alt="" />
      </ContentSuccess>
    </ContainerSuccess>
  );
}
