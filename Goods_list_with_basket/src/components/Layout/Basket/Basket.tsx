import React, { useMemo, useState } from "react"
import { useSelector } from "react-redux"

import { IGoods } from "../../../store/basketStore"
import { IProduct } from "../../../store/productsStore"
import { IRootReducer } from "../../../store/store"
import { GetBasketItemsCount, GetBasketTotalPrice } from "../../../utils/utils"
import { BasketList } from "./BasketList/BasketList"
import { ButtonsBar } from "./ButtonsBar/ButtonsBar"
import { CardInput } from "./CardInput/CardInput"

export const Basket = () => {
    const basket = useSelector<IRootReducer, IGoods[]>(state => state.basketReducer.payload)
    const products = useSelector<IRootReducer, IProduct[]>(state => state.productsReducer.products)

    const [card, setCard] = useState<string>("")

    const items_count = useMemo(() => GetBasketItemsCount(basket), [basket]) 
    const total_price = useMemo(() => GetBasketTotalPrice(products, basket), [products, basket]) 

    return (
        <div className="flex flex-col">
            <span className="block p-4 text-right border-b-[1px] border-border-gray">
                {`Basket Items: ${items_count}`}
            </span>
            <BasketList items={basket} products={products}/>
            <span className="block p-8 text-right">
                {`Total Price: £${total_price}`}
            </span>
            <CardInput setCard={setCard} />
            <ButtonsBar card={card} />
        </div>
    )
}
