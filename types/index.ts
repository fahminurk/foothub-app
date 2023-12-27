enum ShoeStatus {
  NORMAL,
  BESTSELLER,
  DISCOUNT,
}
export type TShoe = {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  status: ShoeStatus;
  shoeImage: TShoeImage[];
  stock: TStock[];
  brandId: number;
  categoryId: number;
  subcategoryId: number;
  category: TCategory;
  brand: TBrand;
  subCategory: TSubcategory;
};

export type TSizeAndStock = {
  size: string;
  stock: number;
};
export type TCategory = {
  id: number;
  name: string;
  imgUrl: string;
  shoe: TShoe[];
  subcategory: TSubcategory[];
};

export type TBrand = {
  id: number;
  name: string;
  imgUrl: string;
  shoe: TShoe[];
};

export type TSubcategory = {
  id: number;
  name: string;
  shoe: TShoe[];
  categoryId: number;
  category: TCategory;
};

export type TShoeImage = {
  id: number;
  imgUrl: string;
  shoeId: number;
  shoe: TShoe;
};

export type TStock = {
  id: number;
  stock: number;
  shoeId: number;
  sizeId: number;
  booked_stock: number;
  shoe: TShoe;
  size: TShoeSize;
};

export type TShoeSize = {
  id: number;
  size: string;
  stock: TStock[];
};

export type TProvince = {
  province_id: string;
  province: string;
};

export type TCity = {
  city_id: string;
  city_name: string;
  province_id: string;
  province: TProvince;
  type: string;
  postcal_code: string;
};
