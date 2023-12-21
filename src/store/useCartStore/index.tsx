import { create } from 'zustand';
import { Product } from 'src/common';

interface CartState {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
  actions: Actions;
}

interface Actions {
  addToCart: (product: Product) => void;
  updateQuantity: (product: Product, action: string) => void;
  deleteItem: (product: Product) => void;
}
const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  actions: {
    addToCart: (product) => {
      const { cart } = get();
      set((state) => {
        const cartExits = cart.find((item) => item.id === product.id);
        if (cartExits) {
          const updateCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          return {
            cart: updateCart,
            totalPrice: state.totalPrice + product.price,
            totalItems: state.totalItems + 1
          };
        }
        const updatedCart = [...cart, { ...product, quantity: 1 }];
        return {
          cart: updatedCart,
          totalPrice: state.totalPrice + product.price,
          totalItems: state.totalItems + 1
        };
      });
    },
    updateQuantity: (product, action) => {
      const { cart } = get();
      set((state) => {
        if (action === 'inc') {
          const updateCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          return {
            cart: updateCart,
            totalPrice: state.totalPrice + product.price,
            totalItems: state.totalItems + 1
          };
        }
        let updateCart = cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
        updateCart = updateCart.filter((item) => item.quantity !== 0);
        return {
          cart: updateCart,
          totalPrice: state.totalPrice - product.price,
          totalItems: state.totalItems - 1
        };
      });
    },
    deleteItem: (product) => {
      const cart = get().cart;
      set((state) => {
        const results = cart.filter((item) => item.id !== product.id);
        return {
          cart: results,
          totalPrice: state.totalPrice - product.price * product.quantity,
          totalItems: state.totalItems - product.quantity
        };
      });
    }
  }
}));

// store = persist(store, {
//   name: 'PERSONAL_INFO',
//   partialize: ({ actions, ...rest }: { actions: Actions }) => rest
// })

// const useCartStore = create<CartState>(store)

export const useCartList = () => useCartStore((state) => state.cart);
export const useCartItem = () => useCartStore((state) => state.totalItems);
export const useTotalOrder = () => useCartStore((state) => state.totalPrice);
export const useActions = () => useCartStore((state) => state.actions);
