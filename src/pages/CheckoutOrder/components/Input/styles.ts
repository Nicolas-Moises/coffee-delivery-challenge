import styled from "styled-components";

export const InputStyled = styled.input`
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${props => props.theme["gray-400"]};
    background: ${props => props.theme["gray-300"]};
    font-size: 0.875rem;
    grid-template-columns: 3fr;
    width: 100%;
`