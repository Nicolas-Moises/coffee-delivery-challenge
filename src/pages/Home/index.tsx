import { HomeContainer, StatsContainer } from "./styles";

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import home from "../../assets/home.png"
import { Icon } from "./components/Icons";
import { HomeCatalog } from "./components/HomeCatalog";

export function Home() {
    return (
        <div>
            <HomeContainer>
                <div>
                    <h1>
                        Encontre o café perfeito <br /> para qualquer hora do dia
                    </h1>
                    <span>
                        Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora
                    </span>

                    <StatsContainer>
                        <article>
                            <div>
                                <Icon variantColor="yellow-700">
                                    <ShoppingCart weight="fill" size={16} />
                                </Icon>
                                <span>Compra simples e segura</span>
                            </div>

                            <div>
                                <Icon variantColor="yellow-500">
                                    <Timer weight="fill" size={16} />
                                </Icon>
                                <span>Entrega rápida e rastreada</span>
                            </div>
                        </article>
                        <article>
                            <div>
                                <Icon variantColor="gray-700">
                                    <Package weight="fill" size={16} />
                                </Icon>
                                <span>Embalagem mantém o café intacto</span>
                            </div>

                            <div>
                                <Icon variantColor="purple-500">
                                    <Coffee weight="fill" size={16} />
                                </Icon>
                                <span>O café chega fresquinho até você</span>
                            </div>
                        </article>
                    </StatsContainer>
                </div>
                <img src={home} alt="" />
            </HomeContainer>

            <HomeCatalog />
        </div>
    )
}