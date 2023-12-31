export interface Category {
  id: string;
  name: string;
}

export interface Option {
  name: string;
  price?: number;
}

export interface Product {
  categoryId: string;
  id: string;
  name: string;
  price: number;
  option?: Option[];
}

export interface CartProduct extends Product {
  count: number;
  totalPrice: number;
}