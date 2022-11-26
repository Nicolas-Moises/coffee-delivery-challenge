import { HomeContainer, HomeTitle, StatsContainer } from "./styles";

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import home from "../../assets/home.png"
import { HomeCatalog } from "./components/HomeCatalog";
import { TextRegular } from "../../components/TextStyles";
import { StatInfoIcon } from "../../components/StatInfoIcon";
import { useTheme } from "styled-components";

export function Home() {
    const { colors } = useTheme()
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
                    
                    <StatsContainer>
                        <StatInfoIcon 
                            colorBg={colors["brand-yellow-dark"]} 
                            icon={<ShoppingCart 
                                weight="fill" 
                                size={16} />} 
                            text="Compra simples e segura" 
                        />
                        <StatInfoIcon 
                            colorBg={colors["base-text"]} 
                            icon={<Package 
                                weight="fill" 
                                size={16} />} 
                            text="Embalagem mantém o café intacto" 
                        />
                        <StatInfoIcon 
                            colorBg={colors["brand-yellow"]} 
                            icon={<Timer 
                                weight="fill" 
                                size={16} />} 
                            text="Entrega rápida e rastreada" 
                        />
                        <StatInfoIcon 
                            colorBg={colors["brand-purple"]} 
                            icon={<Coffee 
                                weight="fill" 
                                size={16} />} 
                            text="O café chega fresquinho até você" 
                        />
                    </StatsContainer>
                </div>
                <img src={home} alt="" />
            </HomeContainer>

            <HomeCatalog />
        </div>
    )
}