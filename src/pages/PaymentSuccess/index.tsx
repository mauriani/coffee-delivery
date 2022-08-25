import { MdLocationOn } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { useLocation } from "react-router-dom";

import { ContainerSuccess, ContentSuccess, IconContainer } from "./styles";

import delivery from "../../assets/delivery.svg";

interface LocationParams {
  road: string;
  typeOfPayment: string;
  uf: string;
  city: string;
  houseNumber: string;
  district: string;
}

export function PaymentSuccess() {
  const location = useLocation();

  const state = location.state as LocationParams;
  const { road, typeOfPayment, uf, city, houseNumber, district } = state;

  console.log(location.state);

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
              Entrega em{" "}
              <span>
                {road}, {houseNumber}
              </span>
              <br /> {district} - {city}, {uf}
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
              <span>{typeOfPayment}</span>
            </p>
          </div>
        </div>
        <img src={delivery} alt="" />
      </ContentSuccess>
    </ContainerSuccess>
  );
}
