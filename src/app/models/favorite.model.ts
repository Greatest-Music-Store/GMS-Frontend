import { FeedbackModel } from "./feedback.model";

export interface FavoriteModel {
    productId: string;
    name: string;
    brand: string;
    price: number;
    url: string;
    description: string;
    rating: number;
    quantity: number;
    categoryName: string;
    subcategoryName: string;
    feedbacks: FeedbackModel[];
    categoryID: string;
    subCategoryId: string;
}
