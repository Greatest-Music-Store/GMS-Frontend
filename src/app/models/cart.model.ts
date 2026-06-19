import { FeedbackModel } from "./feedback.model";

export interface CartModel {
    productId: String;
    name: String;
    brand: String;
    price: number;
    imageUrls: string[];
    description: String;
    rating: number;
    quantity: number;
    categoryName: String;
    subcategoryName: String;
    feedbacks: FeedbackModel[];
    categoryID: String;
    subCategoryId: String;
}
