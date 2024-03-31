import { combineReducers } from "redux"

import { basketReducer,BasketState } from "./basketStore"
import { cardReducer, CardState } from "./cardStore"
import { productsReducer,ProductsState } from "./productsStore"

export interface IRootReducer {
    productsReducer: ProductsState,
    basketReducer: BasketState,
    cardReducer: CardState
}

export const rootReducer = combineReducers<IRootReducer>({
    productsReducer,
    basketReducer,
    cardReducer
})