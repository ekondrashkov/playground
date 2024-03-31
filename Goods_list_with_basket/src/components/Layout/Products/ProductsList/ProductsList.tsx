import React from "react"
import { useSelector } from "react-redux"

import { IProduct } from "../../../../store/productsStore"
import { IRootReducer } from "../../../../store/store"
import { ListItem } from "./ListItem/ListItem"

export const ProductsList = () => {
    const products = useSelector<IRootReducer, IProduct[]>(state => state.productsReducer.products)
    
    return (
        <ul className="w-full flex flex-col mb-6 gap-y-4 pt-4 border-t-[1px] border-border-gray">
            { products.map(item => (
                <ListItem productData={item} key={item.sku}/>
            ))}
        </ul>
    )
}

