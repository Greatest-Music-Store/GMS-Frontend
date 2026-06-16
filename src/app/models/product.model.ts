import { Feedback } from "./feedback.model";

export interface ProductModels {
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

    feedbacks: Feedback[];

    categoryID: string;
    subCategoryId: string;
}
