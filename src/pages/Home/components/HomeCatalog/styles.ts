import styled from "styled-components";

export const CatalogContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
    margin-bottom: 9.825rem;
`
export const CardGrid = styled.article`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 100%;
    column-gap: 2rem;
    row-gap: 2.5rem;
`