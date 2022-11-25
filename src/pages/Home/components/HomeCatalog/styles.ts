import styled from "styled-components";

export const CatalogContainer = styled.div`
    margin-top: 2rem;
    width: 100%;


    h1 {
        font-family: 'Baloo 2', cursive;
        color: ${props => props.theme["gray-700"]};
        margin-bottom: 3.375rem;
    }
    margin-bottom: 9.825rem;
`
export const CardGrid = styled.article`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
`