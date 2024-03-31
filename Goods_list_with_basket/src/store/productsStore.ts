import { ActionCreator, AnyAction, Reducer } from "redux"

export interface ProductsState {
    products: IProduct[];
}

export interface IProduct {
    sku: number;
    name: string;
    description: string;
    price: number;
	basketLimit: number;
}

const initialState: ProductsState = {
    products: [],
}

const GET_PRODUCTS = "GET_PRODUCTS"

export const getProductsData: ActionCreator<AnyAction> = (payload) => ({
    type: GET_PRODUCTS,
    payload,
})

export const productsReducer: Reducer<ProductsState> = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state
    }
}