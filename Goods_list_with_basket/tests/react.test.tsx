import "@testing-library/jest-dom"

import React from "react"
import { render, screen } from "@testing-library/react"

import App from "../src/components/App"

describe("Render App", () => {
    it("Renders correctly Products page", () => {
        render(<App />)
        
        const checkOutBtn = screen.getByText("Proceed to CheckOut")
    
        expect(checkOutBtn).toBeInTheDocument()
        expect(checkOutBtn).toHaveRole("link")
    })
})