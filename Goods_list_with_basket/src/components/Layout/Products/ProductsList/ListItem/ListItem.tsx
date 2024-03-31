import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addBasketItem,deleteBasketItem,IGoods } from "../../../../../store/basketStore"
import { IProduct } from "../../../../../store/productsStore"
import { IRootReducer } from "../../../../../store/store"

interface ListItemProps {
    productData: IProduct
}

export const ListItem = ({ productData }: ListItemProps) => {
    const basket = useSelector<IRootReducer, IGoods[]>(state => state.basketReducer.payload)
    const dispatch = useDispatch()

    const limit = productData.basketLimit
    let initial_add_disabled_state = false

    const product_in_basket_initial = basket.find(product => product.sku === productData.sku)

    if(product_in_basket_initial) {
        initial_add_disabled_state = product_in_basket_initial.quantity >= limit
    }
    
    const [isAddDisabled, setIsAddDisabled] = useState(initial_add_disabled_state)
    const [isRemoveDisabled, setIsRemoveDisabled] = useState(product_in_basket_initial === undefined)

    /** 
     * Click on *Add to basket* button.
     */
    const OnAddToBasketClick = (): void => {
        if(isAddDisabled) {
            return
        }

        const product_in_basket = basket.find(product => product.sku === productData.sku)

        if(!product_in_basket) {
            const new_item: IGoods = {
                sku: productData.sku,
                quantity: 1
            }

            if(limit === 1) {
                setIsAddDisabled(true)
            }

            setIsRemoveDisabled(false)
            dispatch(addBasketItem(new_item))

        } else {
            if(product_in_basket.quantity < limit) {
                product_in_basket.quantity++
                setIsRemoveDisabled(false)

                if(product_in_basket.quantity === limit) {
                    setIsAddDisabled(true)
                }

                dispatch(addBasketItem(product_in_basket))
            }
        }
    }

    /** 
     * Click on *Remove from basket* button.
     */
    const OnRemoveFromBasketClick = (): void => {
        if(isRemoveDisabled) {
            return
        }

        const product_in_basket = basket.find(product => product.sku === productData.sku)

        if(!product_in_basket) {
            return
        } else {
            if(product_in_basket.quantity === 1) {
                setIsRemoveDisabled(true)
                setIsAddDisabled(false)
                dispatch(deleteBasketItem(product_in_basket))

            } else {
                product_in_basket.quantity--
                setIsAddDisabled(false)
                dispatch(addBasketItem(product_in_basket))
            }
        }
    }

return (
    <li className="flex flex-row flex-nowrap items-center justify-between">
        <div className="w-1/5 font-bold">{productData.name}</div>
        <div className="w-1/5">{productData.description}</div>
        <div>{`£${productData.price.toString()}`}</div>
        <button className="box-border p-2 text-[12px] rounded bg-button-gray border-[1px] border-button-b-gray disabled:opacity-70"
                disabled={isAddDisabled} 
                onClick={OnAddToBasketClick}
        >
            {"Add to Basket"}
        </button>
        <button className="box-border p-2 text-[12px] rounded bg-button-red disabled:opacity-70 text-white"
                disabled={isRemoveDisabled}
                onClick={OnRemoveFromBasketClick}
        >
            {"Remove from Basket"}
        </button>
    </li>
    )
}
