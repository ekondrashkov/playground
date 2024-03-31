import { useDispatch } from "react-redux"

import { getBasketData,IGoods } from "../store/basketStore"
import { setCardData } from "../store/cardStore"

interface IBasketData {
    basket: IGoods[];
    cardNumber: string;
}

export const useBasketData = (): IBasketData => {
    const dispatch = useDispatch()

    const data = require("../../client_utils/sample_json/basket_sample.json") as IBasketData
  
    dispatch(getBasketData(data.basket))
    dispatch(setCardData(data.cardNumber))
  
    return data
}