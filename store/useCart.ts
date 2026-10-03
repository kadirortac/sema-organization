import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface CartState {
  items: Product[];
  isOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  toggleCart: () => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  // Ürün eklendiğinde artık sepet menüsü otomatik açılmayacak
  addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
  removeFromCart: (index) => set((state) => ({ 
    items: state.items.filter((_, i) => i !== index) 
  })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));