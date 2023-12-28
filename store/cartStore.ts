import { TShoe } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends TShoe {
  qty: number;
  size: string;
  totalPrice: number;
}
interface IState {
  cart: CartItem[];
  totalItem: number;
  subTotal: number;
}

interface IActions {
  addToCart: (product: CartItem) => void;
  removeItem: (product: CartItem) => void;
  incrementItem: (product: CartItem) => void;
  decrementItem: (product: CartItem) => void;
}

export const useCartStore = create(
  persist<IState & IActions>(
    (set, get) => ({
      cart: [],
      totalItem: 0,
      subTotal: 0,
      addToCart: (product: CartItem) => {
        const cart = get().cart;
        const updateCart = add(cart, product);
        set((state) => ({
          cart: updateCart,
          totalItem: state.totalItem + 1,
          subTotal: state.subTotal + product.price,
        }));
      },
      incrementItem: (product) => {
        const { cart } = get();
        const updateCart = incrementInCart(cart, product);
        set((state) => ({
          cart: updateCart,
          totalItem: state.totalItem + 1,
          subTotal: state.subTotal + product.price,
        }));
      },
      decrementItem: (product) => {
        const { cart } = get();
        const updateCart = decrementInCart(cart, product);
        set((state) => ({
          cart: updateCart,
          totalItem: state.totalItem - 1,
          subTotal: state.subTotal - product.price,
        }));
      },
      removeItem: (product) => {
        const { cart } = get();
        const updateCart = removeFromCart(cart, product);

        set((state) => ({
          cart: updateCart,
          totalItem: state.totalItem - product.qty,
          subTotal: state.subTotal - product.totalPrice,
        }));
      },
    }),
    { name: "cart_storage" }
  )
);

const add = (cart: CartItem[], product: CartItem) => {
  const existingItemIndex = cart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  );

  if (existingItemIndex !== -1) {
    return cart.map((item, index) =>
      index === existingItemIndex
        ? {
            ...item,
            qty: item.qty + 1,
            totalPrice: item.totalPrice + product.price,
          }
        : item
    );
  }
  return [...cart, { ...product, qty: 1, totalPrice: product.price }];
};

const incrementInCart = (cart: CartItem[], product: CartItem): CartItem[] => {
  const existingItemIndex = cart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  );

  if (existingItemIndex !== -1) {
    return cart.map((item, index) =>
      index === existingItemIndex
        ? {
            ...item,
            qty: item.qty + 1,
            totalPrice: item.totalPrice + product.price,
          }
        : item
    );
  }
  return [...cart, { ...product, qty: 1, totalPrice: product.price }];
};

const decrementInCart = (cart: CartItem[], product: CartItem): CartItem[] => {
  const existingItemIndex = cart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  );

  if (existingItemIndex !== -1) {
    return cart.map((item, index) =>
      index === existingItemIndex
        ? {
            ...item,
            qty: item.qty - 1,
            totalPrice: item.totalPrice - product.price,
          }
        : item
    );
  }
  return [...cart, { ...product, qty: 1, totalPrice: product.price }];
};

const removeFromCart = (cart: CartItem[], product: CartItem): CartItem[] => {
  const indexItem = cart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  );

  return cart.filter((item, index) => index !== indexItem);
};
