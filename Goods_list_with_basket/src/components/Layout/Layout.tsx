import React from "react"

import { useBasketData } from "../../hooks/useBasketData"
import { useProductsData } from "../../hooks/useProductsData"

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    useBasketData()
    useProductsData()

    return (
        <div className="p-16">
            {children}
        </div>
    )
}
