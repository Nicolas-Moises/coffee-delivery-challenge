import { HomeContainer, HomeTitle, StatsBox, StatsContainer } from "./styles";

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import home from "../../assets/home.png"
import { Icon } from "./components/Icons";
import { HomeCatalog } from "./components/HomeCatalog";
import { TextRegular } from "../../components/TextStyles";

export function Home() {
    return (
        <div>
            <HomeContainer>
                <div>
                    <HomeTitle size="xl">
                        Encontre o café perfeito <br /> para qualquer hora do dia
                    </HomeTitle>
                    <TextRegular size="lg" color="subtitle" as="h3">
                        Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora
                    </TextRegular>

                    <StatsBox>
                        <article>
                            <div>
                                <Icon variantColor="yellow-700">
                                    <ShoppingCart weight="fill" size={16} />
                                </Icon>
                                <TextRegular>Compra simples e segura</TextRegular>
                            </div>

                            <div>
                                <Icon variantColor="yellow-500">
                                    <Timer weight="fill" size={16} />
                                </Icon>
                                <TextRegular>Entrega rápida e rastreada</TextRegular>
                            </div>
                        </article>
                        <article>
                            <div>
                                <Icon variantColor="gray-700">
                                    <Package weight="fill" size={16} />
                                </Icon>
                                <TextRegular>Embalagem mantém o café intacto</TextRegular>
                            </div>

                            <div>
                                <Icon variantColor="purple-500">
                                    <Coffee weight="fill" size={16} />
                                </Icon>
                                <TextRegular>O café chega fresquinho até você</TextRegular>
                            </div>
                        </article>
                    </StatsBox>

                    <StatsContainer>
                        <p>Benefits</p>
                        <p>Benefits</p>
                        <p>Benefits</p>
                        <p>Benefits</p>
                    </StatsContainer>
                </div>
                <img src={home} alt="" />
            </HomeContainer>

            <HomeCatalog />
        </div>
    )
}