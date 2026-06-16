import { FeedbackModel } from "./feedback.model";

export interface Cart {
    productId: String;
    name: String;
    brand: String;
    price: number;
    url: String;
    description: String;
    rating: number;
    quantity: number;
    categoryName: String;
    subcategoryName: String;
    feedbacks: FeedbackModel[];
    categoryID: String;
    subCategoryId: String;
}
