import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

import { getBasketData } from "../../../../store/basketStore"
import { IRootReducer } from "../../../../store/store"

interface ButtonsBarProps {
    card: string;
}

export const ButtonsBar = ({ card }: ButtonsBarProps) => {
    const saved_card = useSelector<IRootReducer, string>(state => state.cardReducer.card)
    const dispatch = useDispatch()

    const OnCheckoutButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if(card !== saved_card) {
            e.preventDefault()

        } else {
            dispatch(getBasketData([]))
        }
    }

    return (
        <div className="flex items-center justify-end w-1/1 py-6 px-8">
            <NavLink to="/products"
                     className="mr-4 p-2 rounded border-[1px] border-border-gray"
            >
                {"Continue Shopping"}
            </NavLink>
            <NavLink to="/products"
                     className="p-2 bg-button-blue border-button-blue rounded text-white"
                     onClick={OnCheckoutButtonClick}
            >
                {"Checkout"}
            </NavLink>
        </div>
    )
}
