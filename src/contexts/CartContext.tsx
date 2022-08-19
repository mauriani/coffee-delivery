import React, { createContext, ReactNode, useState, useEffect } from "react";

import { formatPrice } from "../util/format";
import api from "../services/api";

interface CartContextProviderProps {
  children: ReactNode;
}

interface Products {
  id: number;
  description: string;
  title: string;
  image: string;
  price: number;
  priceFormatted: string;
  type: [];
  amount: number;
}

interface CartContextType {
  products: Products[];
  addItemCart: (id: number) => void;
  removeItemCart: (id: number) => void;
  totalCart: number;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Products[]>([]);
  const [totalCart, setTotalCart] = useState(0);

  async function loadProducts() {
    const response = await api.get("products");

    const dataFormatted = response.data.map((product: Products) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      amount: 0,
    }));

    setProducts(dataFormatted);
  }

  function addItemCart(id: number) {
    const newProduct = products.map((product) => {
      if (id === product.id) {
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
    const totalItem = products.reduce((sum, product) => {
      if (product.amount >= 1) {
        return (sum = sum + 1);
      }
      return sum;
    }, 0);

    setTotalCart(totalItem);

    //if (total) total(totalItem);
  }, [products]);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <CartContext.Provider
      value={{ products, addItemCart, removeItemCart, totalCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
