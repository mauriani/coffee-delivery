import { useEffect, useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAdd, MdRemove } from "react-icons/md";

import api from "../../services/api";
import { formatPrice } from "../../util/format";
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
  const { products, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <ContainerMenu>
      <h1>Nossos cafés</h1>

      <Content>
        {products.map((product: listProducts) => {
          return (
            <Card key={product.id}>
              <img src={product.image} alt="" />

              <Tags>
                {product.type.map((type) => {
                  return (
                    <>
                      <span>{type}</span>
                    </>
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

                  <button type="button" onClick={() => addItemCart(product.id)}>
                    <MdAdd />
                  </button>
                </div>

                <Icon>
                  <FaShoppingCart size={22} />
                </Icon>
              </ContentPrice>
            </Card>
          );
        })}
      </Content>
    </ContainerMenu>
  );
}
