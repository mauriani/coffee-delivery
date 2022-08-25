import { useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAdd, MdRemove } from "react-icons/md";

import { CartContext } from "../../contexts/CartContext";
import {
  ContainerMenu,
  Content,
  Card,
  Tags,
  ContentPrice,
  Icon,
} from "./styles";

interface listProducts {
  id: number;
  description: string;
  title: string;
  image: string;
  price: number;
  priceFormatted: string;
  type: [];
  amount: number;
}

export function Menu() {
  const navigate = useNavigate();

  const { products, addItemCart, removeItemCart } = useContext(CartContext);

  function handleNavigateToPayment() {
    navigate("/payment");
  }

  return (
    <ContainerMenu>
      <h1>Nossos cafés</h1>

      <Content>
        {products.map((product: listProducts) => {
          return (
            <Fragment key={product.id}>
              <Card>
                <img src={product.image} alt="" />

                <Tags>
                  {product.type.map((type) => {
                    return (
                      <Fragment key={`${product.id}-${type}`}>
                        <span>{type}</span>
                      </Fragment>
                    );
                  })}
                </Tags>

                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <ContentPrice>
                  <span>{product.priceFormatted}</span>

                  <div>
                    <button
                      type="button"
                      onClick={() => removeItemCart(product.id)}
                    >
                      <MdRemove />
                    </button>

                    <input type="number" readOnly value={product.amount} />

                    <button
                      type="button"
                      onClick={() => addItemCart(product.id)}
                    >
                      <MdAdd />
                    </button>
                  </div>

                  <Icon onClick={handleNavigateToPayment} type="button">
                    <FaShoppingCart size={22} />
                  </Icon>
                </ContentPrice>
              </Card>
            </Fragment>
          );
        })}
      </Content>
    </ContainerMenu>
  );
}
