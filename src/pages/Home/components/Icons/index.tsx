import { ReactNode } from "react"
import { IconContainer } from "./styles"

export type IconVariant = 'yellow-500' | 'yellow-700' | 'gray-700' | 'purple-500'

interface IconProps {
    children: ReactNode
    variantColor: IconVariant;
}

export function Icon({ children, variantColor = 'gray-700' }: IconProps) {
    return (
        <IconContainer variantColor={variantColor}> 
            {children}
        </IconContainer>
    )
}