import styled from "styled-components";

export const QuantityProductContainer = styled.div`
    flex: 1;
    background-color: ${props => props.theme.colors["base-button"]};
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    border-radius: 6px;
    padding: 0.5rem;

    input {
        text-align: center;
        width: 100%;
        background: transparent;
        border: none;
        color: ${props => props.theme.colors["base-title"]};

        &:focus {
            outline: none;
        }
    }
`

export const ProductWrapper = styled.button.attrs({
    type: "button",
})`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    color: ${props => props.theme.colors["brand-purple-dark"]};
    width: 0.875rem; 
    height: 0.875rem;

    &:hover {
        color: ${props => props.theme.colors["brand-purple"]};
    }

`