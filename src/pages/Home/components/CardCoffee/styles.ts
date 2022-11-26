import styled from "styled-components";
import { TextTitle } from "../../../../components/TextStyles";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 16rem;
    background: ${props => props.theme.colors["base-card"]};
    border-radius: 0.4rem 2.25rem 0.4rem 2.25rem;
    align-items: center;
    padding: 0 1.25rem 1.5rem;
    text-align: center;

    img {
        width: 7.5rem;
        margin-top: -1.25rem;
        margin-bottom: 0.75rem;
    }
`

export const Tags = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 1rem;
    flex-wrap: wrap;

        span {
            text-transform: uppercase;
            padding: 4px 0.5rem;
            background: ${props => props.theme.colors["brand-yellow-light"]};
            color: ${props => props.theme.colors["brand-yellow-dark"]};
            border-radius: 100px;
            font-size: ${props => props.theme.textSizes["components-tag"]};
            font-weight: bold;
        }
`

export const NameCoffee = styled(TextTitle).attrs({
    size: "sm",
    color: "subtitle", 
    weight: "700",
})`
    margin-bottom: 0.5rem;
`

export const PriceOrder = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    
`

export const ControlQuantityCart = styled.div`
        display: flex;
        align-items: center;
        gap: 0.5rem;
`

export const ValueCard = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    p {
        line-height: 0.75rem;
    }
`

export const AddOrRemoveContainer = styled.div`
    width: 7.5rem;
    height: 2.375rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    > button {
        display: flex;
        background: ${props => props.theme.colors["brand-purple-dark"]};
        color: ${props => props.theme.colors["base-card"]};
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border: none;
        border-radius: 6px;
        height: 2.375rem;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:not(:disabled):hover {
            background: ${props => props.theme.colors["brand-purple"]};
        }

        &:disabled {
            opacity: 0.5;
        }
    }
`