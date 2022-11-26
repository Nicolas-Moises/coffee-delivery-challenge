import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TextTitle } from "../../../../components/TextStyles";
import { IconWithTitle } from "../IconWithTitle";
import { InputFormAddress } from "./InputFormAddress";
import { CompleteOrderContainer, FormSectionContainer } from "./styles";

export function CompleteOrderForm() {
    const { colors } = useTheme()

    return (
        <CompleteOrderContainer>
            <TextTitle size="xs" color="subtitle">
                Complete o pedido
            </TextTitle>

            <FormSectionContainer>
                <IconWithTitle 
                    icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />} 
                    title="Endereço de Entrega" 
                    subtitle="Informe o endereço onde deseja receber seu pedido" 
                />

                <InputFormAddress />
            </FormSectionContainer>
        </CompleteOrderContainer>
    )
}