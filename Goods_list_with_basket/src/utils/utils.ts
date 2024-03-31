import { IGoods } from "../store/basketStore"
import { IProduct } from "../store/productsStore"

export const GetBasketItemsCount = (items: IGoods[]): string => {
    let basket_items_count = 0

    items.forEach(item => {
        basket_items_count += item.quantity
    })

    return basket_items_count.toString()
}

export const GetBasketTotalPrice = (products: IProduct[], basket: IGoods[]): string => {
    let total_price = 0

    basket.forEach(product => {
        const product_sku = product.sku
        const product_info = products.find(productData => productData.sku === product_sku)

        if(product_info) {
            total_price += ( product.quantity * product_info.price )
        }

    })

    return total_price.toFixed(2).toString()
}