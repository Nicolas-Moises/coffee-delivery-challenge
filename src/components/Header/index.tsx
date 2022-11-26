import { HeaderContainer, HeaderNavigation } from "./styles";
import { NavLink } from "react-router-dom"

import { ShoppingCart, MapPin } from "phosphor-react"

import logo from "../../assets/logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to={'/'}>
                <img src={logo} />
            </NavLink>
            <nav>
                <HeaderNavigation variant="purple">
                    <MapPin weight="fill" size={22}/>
                    <p>Porto alegre, RS</p>
                </HeaderNavigation>
                <NavLink to='/checkout_order' title="Cart">
                    <HeaderNavigation variant="yellow">
                        <ShoppingCart weight="fill" size={22} />
                    </HeaderNavigation>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}