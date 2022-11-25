import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 16rem;
    background: ${props => props.theme["gray-200"]};
    border-radius: 0 2.25rem 0 2.25rem;
    align-items: center;
    padding: 1.25rem 1.5rem;

    img {
        width: 7.5rem;
        margin-top: -2.5rem;
        margin-bottom: 0.75rem;
    }
    h3 {
        font-family: 'Baloo 2', cursive;
        font-weight: bold;
        color: ${props => props.theme["gray-800"]};
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.875rem;
        color: ${props => props.theme["gray-600"]};
        margin-bottom: 2rem;
    }
`

export const Tags = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 1rem;

        span {
            text-transform: uppercase;
            padding: 4px 0.5rem;
            background: ${props => props.theme["yellow-300"]};
            color: ${props => props.theme["yellow-700"]};
            border-radius: 100px;
            font-size: 0.625rem;
            font-weight: bold;
        }
`
export const PriceOrder = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    button {
        display: flex;
        background: ${props => props.theme["purple-700"]};
        color: ${props => props.theme["gray-200"]};
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border: none;
        border-radius: 6px;
        height: 2.375rem;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
            background: ${props => props.theme["purple-500"]};
        }
    }
    
`
export const ValueCard = styled.div`
    p {
        font-size: 0.875rem;
        color: ${props => props.theme["gray-700"]};
        margin: 0;
    }
    span {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        margin-left: 4px;
    }
`

export const IncrementOrDecrease = styled.div`
    padding: 0.5rem;
    background: ${props => props.theme["gray-400"]};
    border-radius: 6px;
    height: 2.375rem;

    svg {
        color: ${props => props.theme["purple-500"]};
        cursor: pointer;

        &:hover {
            color: ${props => props.theme["purple-700"]};
        }
    }
    p {
        color: ${props => props.theme["gray-900"]};
    }
`