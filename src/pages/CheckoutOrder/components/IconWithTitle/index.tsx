import { ReactNode } from "react"
import { TextRegular } from "../../../../components/TextStyles"
import { IconWithTitleContainer } from "./styles"

interface IconWithTitleProps {
    title: string
    subtitle: string
    icon: ReactNode
}

export function IconWithTitle({title, subtitle, icon} : IconWithTitleProps) {
    return (
        <IconWithTitleContainer>
            {icon}
            <div>
                <TextRegular color="subtitle">
                    {title}
                </TextRegular>
                <TextRegular size="sm" color="text"> 
                    {subtitle}
                </TextRegular>
            </div>
        </IconWithTitleContainer>
    )
}