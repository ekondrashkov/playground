import React, { useRef } from "react"
import { useSelector } from "react-redux"

import { IRootReducer } from "../../../../store/store"

const NUM_REG_EXP = /\d/g

interface CardInputProps {
    setCard: (number: string) => void
}

export const CardInput = ({ setCard }: CardInputProps) => {
    const input_ref = useRef<HTMLInputElement>(null)
    const saved_card = useSelector<IRootReducer, string>(state => state.cardReducer.card)

    /**
     * Keypress on *Card input* - prevent non-numeric chars input.
     */
    const OnCardNumberKeypress = (event: React.KeyboardEvent) => {
        const symbol = event.key

        if(symbol === "Backspace" || symbol === "Delete" || symbol === "ArrowLeft" || symbol === "ArrowRight") {
            return
        }
        
        const matches = symbol.match(NUM_REG_EXP)

        if(!matches) {
            event.preventDefault()
        }
    }

    /**
     * Blur on *Card input*.
     */
    const OnCardNumberBlur = () => {
        const value = input_ref.current?.value.trim() ?? ""

        if(value.length < 16 || value !== saved_card) {
            input_ref.current?.setAttribute("invalid", "invalid")
        } else {
            input_ref.current?.removeAttribute("invalid")
        }

        setCard(value)
    }

    return (
        <div className="flex items-center justify-center w-1/1">
            <span className="inline-block mr-4">
                {"Input Your Card Number"}
            </span>
            <input type="text" 
                   className="p-2 rounded border-[1px] border-input-border outline-none invalid:border-button-red hover:border-black focus:border-black"
                   ref={input_ref}
                   placeholder="XXXX XXXX XXXX XXXX"
                   maxLength={16} 
                   onKeyDown={OnCardNumberKeypress}
                   onBlur={OnCardNumberBlur}/>
        </div>
    )
}
