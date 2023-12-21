export interface ISubmitForm {
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock: number;
  category?: string;
  brand?: string;
  description: string;
}

export interface IProps {
  idProduct: number;
  onClose: () => void;
}
