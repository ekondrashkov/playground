import { useDispatch } from "react-redux"

import { getProductsData,IProduct } from "../store/productsStore"

export const useProductsData = (): IProduct[] => {
    const dispatch = useDispatch()

    const products = require("../../client_utils/sample_json/products_sample.json") as IProduct[]
  
    dispatch(getProductsData(products))
  
    return products
}