import { FeedbackModel } from "./feedback.model";

export interface ProductModels {
    productId: string;
    name: string;
    brand: string;
    price: number;
    imageUrls: string[];
    description: string;
    rating: number;
    quantity: number;
    categoryName: string;
    subcategoryName: string;

    feedbacks: FeedbackModel[];

    categoryID: string;
    subCategoryId: string;
}
