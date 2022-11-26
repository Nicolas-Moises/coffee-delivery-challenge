import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { ProductWrapper, QuantityProductContainer } from "./styles";

export function QuantityProductInput() {
    const [ quantityProducts, setQuantityProducts ] = useState(0);

    function isProductsEmpty() {
        if(quantityProducts == 0) {
            return true
        } else {
            return false
        }
    }

    return (
        <QuantityProductContainer>
            <ProductWrapper disabled={!isProductsEmpty}>
                <Minus size={14} weight="bold" />
            </ProductWrapper>
            <input type="number" readOnly value={quantityProducts} />
            <ProductWrapper>
                <Plus size={14} weight="bold" />
            </ProductWrapper>
            
        </QuantityProductContainer>
    )
}