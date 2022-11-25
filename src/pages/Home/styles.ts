import styled from "styled-components";


export const HomeContainer = styled.main`
    padding: 5.875rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        color: ${props => props.theme["gray-900"]};
        line-height: 1.3;
        margin-bottom: 1rem;
    }

    span {
        font-size: 1.25rem;
        color: ${props => props.theme["gray-800"]};
        line-height: 1.3;
    }
`

export const StatsContainer = styled.section`
    margin-top: 4.125rem;
    display: flex;
    gap: 2.5rem;

    article {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        div {
            display: flex;
            gap: 0.75rem;
            align-items: center;

            span {
                font-size: 1rem;

            }
        }
    }

`