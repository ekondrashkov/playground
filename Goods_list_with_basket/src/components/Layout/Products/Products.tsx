import React from "react"

import { BasketData } from "./BasketData/BasketData"
import { CheckOutBtn } from "./CheckOutBtn/CheckOutBtn"
import { ProductsList } from "./ProductsList/ProductsList"

export const Products = () => {
    return (
        <div className="flex flex-col">
            <BasketData />
            <ProductsList />
            <CheckOutBtn />
        </div>
    )
}
