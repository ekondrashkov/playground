import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { addBasketItem, deleteBasketItem,IGoods } from "../../../../../store/basketStore"
import { IProduct } from "../../../../../store/productsStore"
import { MinusIcon } from "../../../../Svg/MinusIcon"
import { PlusIcon } from "../../../../Svg/PlusIcon"

interface BasketListItemProps {
    products: IProduct[];
    item: IGoods;
}

export const BasketListItem = ({ item, products }: BasketListItemProps) => {
    const dispatch = useDispatch()
    
    const product_info = products.find(product => product.sku === item.sku)

    const total_price = product_info
        ? (product_info.price * item.quantity).toFixed(2).toString()
        : "n/a"

    const max_count = product_info
        ? product_info.basketLimit
        : 0

    const [isAddDisabled, setIsAddDisabled] = useState(item.quantity >= max_count)
    const [isReduceDisabled, setIsReduceDisabled] = useState(item.quantity === 0)

    const OnRemoveAllBtnClick = (): void => {
        dispatch(deleteBasketItem(item))
    }

    const onAddItemClick = (): void => {
        if(isAddDisabled) {
            return
        }

        const added_item = {...item}

        added_item.quantity++

        setIsAddDisabled(added_item.quantity >= max_count)
        setIsReduceDisabled(false)

        dispatch(addBasketItem(added_item))
    }

    const onReduceItemClick = (): void => {
        if(isReduceDisabled) {
            return
        }

        const reduced_item = {...item}

        reduced_item.quantity--

        setIsReduceDisabled(reduced_item.quantity === 0)

        if(reduced_item.quantity > 0) {
            setIsAddDisabled(false)
            dispatch(addBasketItem(reduced_item))
        } else {
            dispatch(deleteBasketItem(reduced_item))
        }
        
    }

    return (
        <div className="flex items-center justify-between w-1/1">
            <div className="w-1/5 py-4 px-[1px] text-center text-[12px]">
                {product_info?.name ?? ""}
            </div>
            <div className="w-1/5 py-4 px-[1px] text-center text-[12px] flex items-center justify-center gap-x-1">
                <button className="w-3 h-3 bg-contain bg-center [&>*]:w-1/1 [&>*]:h-1/1"
                        disabled={isReduceDisabled}
                        onClick={onReduceItemClick}
                >
                    <MinusIcon />
                </button>
                <span className="inline-block">
                    {item.quantity.toString()}
                </span>
                <button className="w-3 h-3 bg-contain bg-center [&>*]:w-1/1 [&>*]:h-1/1"
                        disabled={isAddDisabled}
                        onClick={onAddItemClick}
                >
                    <PlusIcon />
                </button>
            </div>
            <div className="w-1/5 py-4 px-[1px] text-center text-[12px]">
                {`£${product_info?.price.toString()}`}
            </div>
            <div className="w-1/5 py-4 px-[1px] text-center text-[12px]">
                {total_price}
            </div>
            <div className="w-1/5 py-4 px-[1px] text-center text-[12px]">
                <button className="p-2 text-[12px] bg-button-red rounded text-white" onClick={OnRemoveAllBtnClick}>
                    {"Remove All"}
                </button>
            </div>
        </div>
    )
}
