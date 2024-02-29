export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: number;
};

export type ProductsAPIResponse = Product[];

export type TyC = {
  id: number;
  title: string;
  description: string;
};

export type TyCsAPIResponse = {
  version: string;
  tycs: TyC[];
};

export type Discount = {
  id: number;
  title: string;
  image: string;
  description: string;
  expiration: string;
};

export type DiscountsAPIResponse = Discount[];