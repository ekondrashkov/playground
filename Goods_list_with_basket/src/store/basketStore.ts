import { ActionCreator, AnyAction, Reducer } from "redux"

export interface BasketState {
    payload: IGoods[];
}

export interface IGoods {
    sku: number;
    quantity: number;
}

const initialState: BasketState = {
    payload: [],
}

const GET_BASKET = "GET_BASKET"

export const getBasketData: ActionCreator<AnyAction> = (payload) => ({
    type: GET_BASKET,
    payload,
})

const ADD_BASKET_ITEM = "ADD_BASKET_ITEM"

export const addBasketItem: ActionCreator<AnyAction> = (payload) => ({
    type: ADD_BASKET_ITEM,
    payload,
})

const DELETE_BASKET_ITEM = "DELETE_BASKET_ITEM"

export const deleteBasketItem: ActionCreator<AnyAction> = (payload) => ({
    type: DELETE_BASKET_ITEM,
    payload,
})

export const basketReducer: Reducer<BasketState> = (state = initialState, action) => {
    switch (action.type) {
        case GET_BASKET:
            return {
                ...state,
                payload: action.payload,
            }
        case ADD_BASKET_ITEM:{
            const old_payload = [...state.payload].filter(item => item.sku !== action.payload.sku)

            return {
                ...state,
                payload: [...old_payload, action.payload],
            }
        }

        case DELETE_BASKET_ITEM:{
            const new_payload = [...state.payload].filter(item => item.sku !== action.payload.sku)

            return {
                ...state,
                payload: new_payload,
            }
        }

        default:
            return state
    }
}