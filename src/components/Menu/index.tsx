import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAdd, MdRemove } from "react-icons/md";

import api from "../../services/api";
import { formatPrice } from "../../util/format";
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

interface Props {
  total?: (n: number) => void;
}

export function Menu({ total }: Props) {
  const [products, setProducts] = useState<listProducts[]>([]);
  const [totalCart, setTotalCart] = useState(0);

  async function loadProducts() {
    const response = await api.get("products");

    const dataFormatted = response.data.map((product: listProducts) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      amount: 0,
    }));

    setProducts(dataFormatted);
  }

  function addItemCart(id: number) {
    const newProduct = products.map((product) => {
      if (id === product.id) {
        console.log(product.amount);
        return {
          ...product,
          amount: product.amount + 1,
        };
      } else {
        return {
          ...product,
        };
      }
    });

    setProducts(newProduct);
  }

  function removeItemCart(id: number) {
    const newProduct = products.map((product) => {
      if (id === product.id && product.amount > 0) {
        return {
          ...product,
          amount: product.amount - 1,
        };
      } else {
        return {
          ...product,
        };
      }
    });

    setProducts(newProduct);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const totalItem = products.reduce((sum, product) => {
      if (product.amount >= 1) {
        return (sum = sum + 1);
      }
      return sum;
    }, 0);

    //setTotalCart(total);

    if (total) total(totalItem);
  }, [products]);

  return (
    <ContainerMenu>
      <h1>Nossos cafés</h1>

      <Content>
        {products.map((product: listProducts) => {
          return (
            <Card key={product.id.toString()}>
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
