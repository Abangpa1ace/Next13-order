import { CartProduct, Product } from "@/types/order";
import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import orderStore from "./order";

interface OrderStoreState {
  // state
  cartList: CartProduct[];
  selectedProductId: string;
  // action
  addCartProduct: (product: Product) => void;
  increaseCartProduct: (productId: string) => void;
  decreaseCartProduct: (productId: string) => void;
  removeCartProduct: (productId: string) => void;
  setSelectedProductId: (productId: string) => void;
}

export const useOrderStore = create<OrderStoreState>()(devtools(orderStore))