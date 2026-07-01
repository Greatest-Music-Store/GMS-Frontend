import { FeedbackModel } from "./feedback.model";

export interface ProductModels {
    productId: string;
    name: string;
    brand: string;
    price: number;
    imageUrls?: string[];
    description: string;
    rating: number;
    quantity: number;
    categoryName: string;
    subcategoryName: string;
    discountPercentage: number;

  feedbacks: FeedbackModel[];

  categoryID: string;
  subCategoryId: string;
}
export interface ProductFilters {
  Name?: string;
  Brand?: string;
  CategoryId?: string;
  SubcategoryId?: string;
  MinPrice?: number;
  MaxPrice?: number;
  SortBy?: string;
  CategoryName?: string;
  SubcategoryName?: string;
  search?: string;
}
export interface ProductRequest{
  name: string;
  brand: string;
  price: number;
  imageUrls?: string[];
  description: string;
  quantity: number; 
  discountPercentage: number;
  categoryID: string;
  subCategoryId: string;
}
export interface CategoryModel {
  id: string;
  name: string;
}

export interface SubcategoryModel {
  id: string;
  name: string;
  categoryId?: string;
}