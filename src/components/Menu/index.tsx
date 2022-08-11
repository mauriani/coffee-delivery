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
}

export function Menu() {
  const [products, setProducts] = useState<listProducts[]>([]);

  async function loadProducts() {
    const response = await api.get("products");

    const dataFormatted = response.data.map((product: listProducts) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    setProducts(dataFormatted);
  }

  useEffect(() => {
    loadProducts();
  }, []);

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
                  {/* <button type="button">
                    <MdRemove />
                  </button>

                  <input type="number" readOnly value={2} />

                  <button type="button">
                    <MdAdd />
                  </button> */}
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
