import { create } from "zustand";
import { Product } from "../hooks/useProducts";

interface ProductStore {
  items: Product[];
  addItem: (product: Product) => void;
  deleteItem: (product: Product) => void;
  // reset: () => void
}

const useProductStore = create<ProductStore>((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const exist = state.items.find((i) => i.id === product.id);

      if (exist) {
        return {
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }

      return {
        items: [...state.items, { ...product, qty: 1 }],
      };
    }),

  deleteItem: (product) =>
    set((state) => {
      const exist = state.items.find((i) => i.id === product.id);

      if (exist?.qty === 1) {
        return {
          items: state.items.filter((i) => i.id !== product.id),
        };
      }

      return {
        items: state.items.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty - 1 } : i
        ),
      };
    }),
}));

export default useProductStore;
