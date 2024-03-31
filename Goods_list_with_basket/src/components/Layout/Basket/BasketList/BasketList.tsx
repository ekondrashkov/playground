import React from "react"

import { IGoods } from "../../../../store/basketStore"
import { IProduct } from "../../../../store/productsStore"
import { BasketListItem } from "./BasketListItem/BasketListItem"

interface BasketListProps {
    items: IGoods[];
    products: IProduct[];
}

export const BasketList = ({ items, products }: BasketListProps) => {
    items.sort((a, b) => a.sku - b.sku)

    return (
        <div className="w-1/1 p-4">
            <div className="flex flex-row items-center justify-between w-1/1 bg-gray">
                <div className="w-1/5 py-2 px-[1px] font-bold text-center">
                    {"PRODUCT NAME"}
                </div>
                <div className="w-1/5 py-2 px-[1px] font-bold text-center">
                    {"SELECTED QUANTITY"}
                </div>
                <div className="w-1/5 py-2 px-[1px] font-bold text-center">
                    {"UNIT PRICE"}
                </div>
                <div className="w-1/5 py-2 px-[1px] font-bold text-center">
                    {"TOTAL PRICE"}
                </div>
                <div className="w-1/5 py-2 px-[1px] font-bold text-center"/>
            </div>
            <div className="w-1/1 p-4">
                {items.map(product => (
                    <BasketListItem products={products} item={product} key={product.sku} />
                ))}
            </div>
        </div>
    )
}
