import {describe, expect, test} from "@jest/globals"

import { GetBasketItemsCount, GetBasketTotalPrice } from "../src/utils/utils"

describe("Check utils: basket items count and total price", () => {
    test("Check basket items count", () => {
        expect(GetBasketItemsCount([
        {
            sku: 1,
            quantity: 5
        },
        {
            sku: 3,
            quantity: 1
        }
        ])).toBe("6")
    })
    test("Check basket total price", () => {
        expect(GetBasketTotalPrice([
            {
              "sku": 1,
              "name": "Red Product",
              "description": "Red Product description",
              "price": 1.01,
              "basketLimit": 5
            },
            {
              "sku": 2,
              "name": "Orange Product",
              "description": "Orange Product description",
              "price": 2.02,
              "basketLimit": 4
            },
            {
              "sku": 3,
              "name": "Yellow Product",
              "description": "Yellow Product description",
              "price": 3.03,
              "basketLimit": 3
            },
            {
              "sku": 4,
              "name": "Green Product",
              "description": "Green Product description",
              "price": 4.04,
              "basketLimit": 2
            },
            {
              "sku": 5,
              "name": "Blue Product",
              "description": "Blue Product description",
              "price": 5.05,
              "basketLimit": 1
            }
          ],
          [
            {
                sku: 1,
                quantity: 5
            },
            {
                sku: 3,
                quantity: 1
            }
            ])).toBe("8.08")
    })
})
