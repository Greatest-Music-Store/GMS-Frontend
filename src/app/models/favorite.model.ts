import { ProductModels } from "./product.model";

export interface FavoriteModel {
    product?: ProductModels;
    Product?: ProductModels;
}

export interface FavoriteRequest {
    productId: string;
}
export interface FavoriteResponse {
    isFavorite: boolean;
    favorite: FavoriteModel;
}
