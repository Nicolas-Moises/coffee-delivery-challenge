import styled from "styled-components";
import { TextTitle } from "../../components/TextStyles";

export const HomeContainer = styled.main`
    padding: 5.875rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 1.25rem;
        color: ${props => props.theme.colors["base-text"]};
        line-height: 1.3;
    }
`

export const HomeTitle = styled(TextTitle)`
    margin-bottom: 1rem;
`


export const StatsBox = styled.section`
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

export const StatsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`