import styled from "styled-components";

export const InputStyled = styled.input`
    padding: 0.75rem;
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors["base-button"]};
    background: ${props => props.theme.colors["base-input"]};
    font-size: ${props => props.theme.textSizes["text-regular-sm"]};
    width: 100%;
`