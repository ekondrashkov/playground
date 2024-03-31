import React from "react"
import { NavLink } from "react-router-dom"

export const CheckOutBtn = () => {
    return (
        <div className="flex justify-end">
            <NavLink to="/basket"
                     className="box-border p-2 rounded bg-button-blue disabled:opacity-70 text-white" 
            >
                {"Proceed to CheckOut"}    
            </NavLink>
        </div>
    )
}
