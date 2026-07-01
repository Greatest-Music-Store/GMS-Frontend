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