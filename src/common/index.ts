export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  images: string[];
  thumbnail: string;
  quantity: number | 1;
  stock: number;
  rating: number;
  price: number;
  discountPercentage: number;
}
