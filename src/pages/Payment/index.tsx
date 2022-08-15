import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import {
  ContainerPayment,
  ContainerAddress,
  TextInput,
  ContainerFormOfPayment,
} from "./styles";

import { MdLocationOn, MdOutlineAttachMoney } from "react-icons/md";
import { BiCreditCard, BiMoney } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
interface IBGEUFResponse {
  sigla: string;
}

export function Payment() {
  const [ufs, setUfs] = useState<String[]>([]);
  const [selectUf, setSelectUf] = useState("0");

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectUf(uf);
  }

  // mostrar os UF
  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  return (
    <ContainerPayment>
      <div>
        <h1>Complete seu pedido</h1>
        <ContainerAddress>
          <header>
            <MdLocationOn size={22} />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <footer>
            <TextInput placeholder="CEP" name="cep" />
            <TextInput placeholder="Rua" name="rua" />

            <div>
              <TextInput placeholder="Número" name="Número" />
              <TextInput placeholder="Complemento" name="Complemento" />
            </div>

            <div>
              <TextInput placeholder="Bairro" name="Bairro" />
              <TextInput placeholder="Cidade" name="Cidade" />
              <select
                name="uf"
                id="uf"
                value={selectUf}
                onChange={handleSelectUf}
              >
                <option value="0">UF</option>
                {ufs.map((uf, index) => (
                  <option key={index}>{uf}</option>
                ))}
              </select>
            </div>
          </footer>
        </ContainerAddress>

        <ContainerFormOfPayment>
          <header>
            <MdOutlineAttachMoney size={22} />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <footer>
            <button>
              <BiCreditCard size={16} />
              Cartão de crédito
            </button>
            <button>
              <BsBank size={16} />
              cartão de débito
            </button>
            <button>
              <BiMoney size={16} />
              dinheiro
            </button>
          </footer>
        </ContainerFormOfPayment>
      </div>

      <div>
        <h1>Cafés selecionados</h1>
      </div>
    </ContainerPayment>
  );
}
