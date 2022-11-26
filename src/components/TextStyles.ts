import styled from "styled-components";

interface TextTitleProps {
    color?: 'title' | 'subtitle' | 'text';
    size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    weight?: string | number
}

export const TextTitle = styled.h1<TextTitleProps>`
    color: ${({theme, color})=> theme.colors[`base-${color ?? 'title'}`]};
    font-size: ${({theme, size}) => theme.textSizes[`title-title-${size ?? 'md'}`]};
    font-family: ${props => props.theme.fonts.title};
    line-height: 130%;
    font-weight: ${({weight}) => weight ?? 800}
`   

interface TextRegularProps {
    color?: 'label' | 'subtitle' | 'text';
    size?: 'lg' | 'md' | 'sm' 
    weight?: string | number
}

export const TextRegular = styled.p<TextRegularProps>`
    color: ${({theme, color})=> theme.colors[`base-${color ?? 'text'}`]};
    font-size: ${({theme, size}) => theme.textSizes[`text-regular-${size ?? 'md'}`]};
    font-family: ${props => props.theme.fonts.regular};
    line-height: 130%;
    font-weight: ${({weight}) => weight ?? 400}
`   
