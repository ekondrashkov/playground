import { ActionCreator, AnyAction, Reducer } from "redux"

export interface CardState {
    card: string;
}

const initialState: CardState = {
    card: ""
}

const SET_CARD = "SET_CARD"

export const setCardData: ActionCreator<AnyAction> = (text) => ({
    type: SET_CARD,
    text,
})

export const cardReducer: Reducer<CardState> = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARD:
            return {
                ...state,
                card: action.text,
            }
        default:
            return state
    }
}