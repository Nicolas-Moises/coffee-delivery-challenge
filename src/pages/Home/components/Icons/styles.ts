import styled, { css } from "styled-components";
import { IconVariant } from ".";

interface IconContainerProps {
    variantColor: IconVariant;
}

export const IconContainer = styled.div<IconContainerProps>`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${props => props.theme.colors["base-white"]};

    ${props => {
        return `background-color: ${IconVariants[props.variantColor]}`
    }}

`
const IconVariants = {
    'yellow-500': '#DBAC2C',
    'yellow-700': '#C47F17',
    'gray-700': '#574F4D',
    'purple-500': '#8047F8'
}