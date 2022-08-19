import { useEffect, useState, ChangeEvent, useContext, Fragment } from "react";
import axios from "axios";

import {
  MdLocationOn,
  MdOutlineAttachMoney,
  MdRemove,
  MdAdd,
} from "react-icons/md";
import { BiCreditCard, BiMoney } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  ContainerPayment,
  ContainerAddress,
  FormAddress,
  Header,
  TextInput,
  ContainerFormOfPayment,
  ContainerProducts,
  ContentProducts,
  CardItem,
  ContentButtonAddRemove,
  Line,
  ContainerTotal,
} from "./styles";

import { CartContext } from "../../contexts/CartContext";
import { formatPrice } from "../../util/format";

interface registerAddressProps {
  zipCode: string;
  road: string;
  houseNumber: string;
  complement?: string;
  city: string;
  district: string;
  uf: string;
}

export function Payment() {
  const { products, addItemCart, removeItemCart } = useContext(CartContext);

  const [totalItens, setTotalItems] = useState("");
  const [valueWithShipping, setValueWithShipping] = useState("");
  const [registerAddress, setRegisterAddress] = useState<
    registerAddressProps[]
  >([]);

  const [selectUf, setSelectUf] = useState("");
  const [selectCity, setSelectCity] = useState("");

  const [selectZipCode, setSelectZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");

  function handleSelectZipCode(event: ChangeEvent<HTMLInputElement>) {
    const zipCode = event.target.value;
    setSelectZipCode(zipCode);
  }

  function handleRegisterAddress() {}

  useEffect(() => {
    async function handleLoadZipCode() {
      const zipCode = selectZipCode.replace(/\D/g, "");

      if (zipCode != "") {
        const validateZipCode = /^[0-9]{8}$/;

        if (validateZipCode.test(zipCode)) {
          await axios
            .get("https://viacep.com.br/ws/" + selectZipCode + "/json/")
            .then((response) => {
              const { logradouro, bairro, uf, localidade } = response.data;

              setAddress(logradouro);
              setDistrict(bairro);
              setSelectCity(localidade);
              setSelectUf(uf);
            })
            .catch((error: string) => {
              alert(`Atenção ${error}`);
            });
        }
      }
    }
    handleLoadZipCode();
  }, [selectZipCode]);

  useEffect(() => {
    if (products.length > 0) {
      const totalItens = products
        .filter((product) => product.amount >= 1)
        .map((product) => {
          return product.amount * product.price;
        })
        .reduce((total, currentValue) => total + currentValue);

      setTotalItems(formatPrice(totalItens));
      setValueWithShipping(formatPrice(totalItens + 3.5));
    }
  }, [products]);

  return (
    <ContainerPayment>
      <form name="form" id="form" action="">
        <div>
          <h1>Complete seu pedido</h1>
          <ContainerAddress>
            <Header>
              <MdLocationOn size={22} />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Header>

            <FormAddress>
              <TextInput
                placeholder="CEP"
                name="cep"
                type="text"
                pattern="[0-9]{5}"
                value={selectZipCode}
                onChange={handleSelectZipCode}
                required
              />
              <TextInput
                placeholder="Rua"
                name="address"
                defaultValue={address}
                required
              />

              <div>
                <TextInput placeholder="Número" name="Número" required />
                <TextInput placeholder="Complemento" name="Complemento" />
              </div>

              <div>
                <TextInput
                  placeholder="Bairro"
                  name="district"
                  defaultValue={district}
                  required
                />
                <TextInput
                  placeholder="Cidade"
                  name="city"
                  id="city"
                  defaultValue={selectCity}
                  required
                />

                <TextInput
                  placeholder="UF"
                  name="uf"
                  id="uf"
                  defaultValue={selectUf}
                  required
                />
              </div>
            </FormAddress>
          </ContainerAddress>

          <ContainerFormOfPayment>
            <Header>
              <MdOutlineAttachMoney size={22} />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </Header>

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
          <ContainerProducts>
            <ContentProducts>
              {products
                .filter((product) => product.amount >= 1)
                .map((product) => {
                  return (
                    <Fragment key={product.id}>
                      <CardItem>
                        <img src={product.image} alt="" />

                        <header>
                          <h1>{product.title}</h1>

                          <div>
                            <ContentButtonAddRemove>
                              <button
                                type="button"
                                onClick={() => removeItemCart(product.id)}
                              >
                                <MdRemove />
                              </button>

                              <input
                                type="number"
                                readOnly
                                value={product.amount}
                              />

                              <button
                                type="button"
                                onClick={() => addItemCart(product.id)}
                              >
                                <MdAdd />
                              </button>
                            </ContentButtonAddRemove>

                            <button>
                              <RiDeleteBin6Line size={16} />
                              Remover
                            </button>
                          </div>
                        </header>

                        <div>
                          <span>{product.priceFormatted}</span>
                        </div>
                      </CardItem>
                      <Line />
                    </Fragment>
                  );
                })}

              <ContainerTotal>
                <div>
                  <p>Total de itens</p>
                  <span>{totalItens}</span>
                </div>

                <div>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </div>

                <footer>
                  <span>Total</span>
                  <span>{valueWithShipping}</span>
                </footer>
              </ContainerTotal>

              <button type="submit">confirmar pedido</button>
            </ContentProducts>
          </ContainerProducts>
        </div>
      </form>
    </ContainerPayment>
  );
}
