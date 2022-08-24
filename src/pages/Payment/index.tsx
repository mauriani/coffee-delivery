import {
  useEffect,
  useState,
  ChangeEvent,
  useContext,
  Fragment,
  FormEvent,
} from "react";
import axios from "axios";

import {
  MdLocationOn,
  MdOutlineAttachMoney,
  MdRemove,
  MdAdd,
} from "react-icons/md";
import { BiCreditCard, BiMoney, BiCart } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useLocation } from "react-router-dom";

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
  id: string;
  zipCode: string;
  road: string;
  houseNumber: string;
  complement?: string;
  city: string;
  district: string;
  uf: string;
  typeOfPayment: string;
}

export function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const { products, addItemCart, removeItemCart, removeOneItemCart } =
    useContext(CartContext);

  const [totalItens, setTotalItems] = useState(0);
  const [totalValueItens, setTotalValueItens] = useState("");
  const [valueWithShipping, setValueWithShipping] = useState("");
  const [typeOfPayment, setTypeOfPayment] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
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

  function handleSelectHouseNumber(event: ChangeEvent<HTMLInputElement>) {
    const houseNumber = event.target.value;
    setHouseNumber(houseNumber);
  }

  function handleSelectAddress(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }

  function handleSelectDistrict(event: ChangeEvent<HTMLInputElement>) {
    setDistrict(event.target.value);
  }

  function handleSelectCity(event: ChangeEvent<HTMLInputElement>) {
    setSelectCity(event.target.value);
  }

  function handleSelectUf(event: ChangeEvent<HTMLInputElement>) {
    setSelectUf(event.target.value);
  }

  function handleFormOfPayment(paymentType: string) {
    setTypeOfPayment(paymentType);
  }

  function handleRegisterAddress(event: FormEvent) {
    event.preventDefault();

    const complement = (
      document.getElementById("complement") as HTMLInputElement
    ).value;

    if (typeOfPayment === "") {
      alert("Atenção !! selecione a forma de pagamento");
      return;
    }

    const newRegisterAddress = {
      id: uuidv4(),
      zipCode: selectZipCode,
      road: address,
      houseNumber: houseNumber,
      complement: complement,
      city: selectCity,
      district: district,
      uf: selectUf,
      typeOfPayment: typeOfPayment,
    };

    setRegisterAddress([...registerAddress, newRegisterAddress]);

    navigate("/paymentsuccess", {
      state: {
        road: address,
        typeOfPayment: typeOfPayment,
        uf: selectUf,
        city: selectCity,
      },
    });
  }

  async function handleLoadZipCode() {
    const zipCode = selectZipCode.replace(/\D/g, "");

    if (zipCode != "") {
      const validateZipCode = /^[0-9]{8}$/;

      if (validateZipCode.test(zipCode)) {
        await axios
          .get("https://viacep.com.br/ws/" + selectZipCode + "/json/")
          .then((response) => {
            const { logradouro, bairro, uf, localidade } = response.data;

            if (response.data.erro) {
              alert(`Atenção, cep inválido !`);
            } else {
              setAddress(logradouro);
              setDistrict(bairro);
              setSelectCity(localidade);
              setSelectUf(uf);
            }
          })
          .catch((error: string) => {
            alert(`Atenção ${error}`);
          });
      }
    }
  }

  useEffect(() => {
    handleLoadZipCode();
  }, [selectZipCode]);

  useEffect(() => {
    if (products.length > 0) {
      const totalItens = products
        .filter((product) => product.amount >= 1)
        .map((product) => {
          if (product.amount > 0) return product.amount * product.price;
          else return 0;
        })
        .reduce((total, currentValue) => total + currentValue, 0);

      setTotalItems(totalItens);
      setTotalValueItens(formatPrice(totalItens));
      setValueWithShipping(formatPrice(totalItens + 3.5));
    }
  }, [products]);

  return (
    <ContainerPayment>
      {totalItens > 0 ? (
        <form name="form" id="form" onSubmit={handleRegisterAddress}>
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
                  size={10}
                  maxLength={9}
                  value={selectZipCode}
                  onChange={handleSelectZipCode}
                  required
                />
                <TextInput
                  placeholder="Rua"
                  name="address"
                  id="address"
                  defaultValue={address}
                  onChange={handleSelectAddress}
                  required
                />

                <div>
                  <TextInput
                    placeholder="Número"
                    id="number-house"
                    name="number-house"
                    onChange={handleSelectHouseNumber}
                    required
                  />
                  <TextInput
                    placeholder="Complemento"
                    name="complement"
                    id="complement"
                  />
                </div>

                <div>
                  <TextInput
                    placeholder="Bairro"
                    name="district"
                    id="district"
                    defaultValue={district}
                    onChange={handleSelectDistrict}
                    required
                  />
                  <TextInput
                    placeholder="Cidade"
                    name="city"
                    id="city"
                    defaultValue={selectCity}
                    onChange={handleSelectCity}
                    required
                  />

                  <TextInput
                    placeholder="UF"
                    name="uf"
                    id="uf"
                    defaultValue={selectUf}
                    onChange={handleSelectUf}
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
                <button
                  type="button"
                  onClick={() => handleFormOfPayment("Cartão de crédito")}
                >
                  <BiCreditCard size={16} />
                  Cartão de crédito
                </button>
                <button
                  type="button"
                  onClick={() => handleFormOfPayment("Cartão de débito")}
                >
                  <BsBank size={16} />
                  cartão de débito
                </button>
                <button
                  type="button"
                  onClick={() => handleFormOfPayment("dinheiro")}
                >
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

                              <button
                                type="button"
                                onClick={() => removeOneItemCart(product.id)}
                              >
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
                    <span>{totalValueItens}</span>
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
      ) : (
        <div>
          <BiCart size={100} />
          <span>Não há itens em seu carrinho de compras</span>
        </div>
      )}
    </ContainerPayment>
  );
}
