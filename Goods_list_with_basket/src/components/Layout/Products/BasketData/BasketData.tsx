import React, { useMemo } from "react"
import { useSelector } from "react-redux"

import { IGoods } from "../../../../store/basketStore"
import { IProduct } from "../../../../store/productsStore"
import { IRootReducer } from "../../../../store/store"
import { GetBasketItemsCount, GetBasketTotalPrice } from "../../../../utils/utils"

export const BasketData = () => {
    const basket = useSelector<IRootReducer, IGoods[]>(state => state.basketReducer.payload)
    const products = useSelector<IRootReducer, IProduct[]>(state => state.productsReducer.products)

    const items_count = useMemo(() => 
        GetBasketItemsCount(basket), [basket])
 
    const total_price = useMemo(() => 
        GetBasketTotalPrice(products, basket), [basket, products]) 

    return (
        <div className="flex items-center justify-end gap-x-4 w-1/1 p-4">
            <div>
                <span>{"Basket Items: "}</span>
                <span>{items_count}</span>
            </div>
            <div>
                <span>{"Total Price: "}</span>
                <span>{`£${total_price}`}</span>
            </div>
        </div>
    )
}
