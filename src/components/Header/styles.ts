import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem 0;

nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;
}
`
interface HeaderNavigationProps {
    variant: "yellow" | "purple"
}


export const HeaderNavigation = styled.button<HeaderNavigationProps>`
        display: flex;
        gap: 4px;
        align-items: center;
        padding: 0.5rem;
        border-radius: 8px;
        position: relative;
        justify-content: center;
        height: 2.375rem;
        font-size: ${props => props.theme.textSizes["text-regular-sm"]};
        border: none;

        ${({ theme, variant }) => css`
            background: ${theme.colors[`brand-${variant}-light`]};
            color: ${theme.colors[`brand-${variant}-dark`]};

        `} 

        ${({ theme, variant }) => 
        variant == 'purple' && 
        css`
            svg {
                color: ${theme.colors["brand-purple"]};
            }
        `} 
`