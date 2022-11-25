import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem 0;

nav {
    display: flex;
    gap: 0.875rem;
    align-items: center;

    div {
        display: flex;
        gap: 4px;
        align-items: center;
        background: ${props => props.theme["purple-300"]};
        color: ${props => props.theme["purple-700"]};
        padding: 0.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;

        svg {
        color: ${props => props.theme["purple-500"]}
    }
    }
    
    
    a {
        background: ${props => props.theme["yellow-300"]};
        color: ${props => props.theme["yellow-700"]};
        padding: 0.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease-in;
    }
}
`