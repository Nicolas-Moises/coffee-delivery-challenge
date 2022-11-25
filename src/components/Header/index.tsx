import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom"

import { ShoppingCart, MapPin } from "phosphor-react"

import logo from "../../assets/logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <nav>
                <div>
                    <MapPin weight="fill" size={22}/>
                    <p>Porto alegre, RS</p>
                </div>
                <NavLink to='/checkout' title="Cart">
                    <ShoppingCart weight="fill" size={22} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}