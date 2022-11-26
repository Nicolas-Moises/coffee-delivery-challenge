import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['brand-yellow-dark']};
}
body {
    background: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

body, input, textarea, button  {
    font-family: ${props => props.theme.fonts.regular};
    font-weight: 400;
    font-size: ${props => props.theme.textSizes['text-regular-m']};
}
`