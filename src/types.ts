export type TProduct = {
  id: number | string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type TInput = {
  name: string;
  placeholder: string;
  type: string;
  textError?: string;
  register: object;
};

export type TProductWithoutId = Omit<TProduct, "id">;

export type TNewProduct = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type TUser = {
  username: string;
  password: string;
};

export type TUsetDb = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

export type TCategories = {
  categories: string[];
};
