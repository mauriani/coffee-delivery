import { useEffect, useState } from "react";
import api from "../../services/api";
import { formatPrice } from "../../util/format";
import { ContainerMenu } from "./styles";

interface listProducts {
  id: number;
  title: string;
  image: string;
  price: number;
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

  console.log(products);
  return (
    <ContainerMenu>
      <h1>Nossos cafés</h1>
    </ContainerMenu>
  );
}
