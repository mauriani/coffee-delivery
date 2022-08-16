import { ContainerSuccess, ContentSuccess } from "./styles";

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
            <p>
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </p>
          </div>

          <div>
            <p>
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </p>
          </div>

          <div>
            <p>
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </p>
          </div>
        </div>
        <img src={delivery} alt="" />
      </ContentSuccess>
    </ContainerSuccess>
  );
}
