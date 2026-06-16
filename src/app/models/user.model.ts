import { FavoriteModel } from "./favorite.model";


export interface UserModel {
    id: string;
    name: string;
    email: string;
    phone: string;
    cep: string;
    favorite: FavoriteModel[];
}
