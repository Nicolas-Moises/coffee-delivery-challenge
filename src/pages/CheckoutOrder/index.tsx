import { MapPinLine } from "phosphor-react";
import { Input } from "../../components/Input";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CheckoutContainer } from "./styles";

export function CheckoutOrder() {
    return (
        <CheckoutContainer>
            <CompleteOrderForm />
        </CheckoutContainer>
    )
}