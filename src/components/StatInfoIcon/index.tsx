import { ReactNode } from "react";
import { IconContainer, StatInfoContainer } from "./styles";

interface StatInfoIconProps { 
    icon: ReactNode;
    text: string | ReactNode;
    colorBg: string;
}

export function StatInfoIcon({ icon, text, colorBg }: StatInfoIconProps) {
    return (
        <StatInfoContainer>
            <IconContainer colorBg={colorBg}>
                {icon}
            </IconContainer>
            {typeof text == 'string' ? <p>{text}</p> : text}
        </StatInfoContainer>
    )
}