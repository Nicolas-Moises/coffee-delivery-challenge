import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityProductInput } from "../../../../components/QuantityProductInput";
import { TextRegular, TextTitle } from "../../../../components/TextStyles";
import { formatValuePrice } from "../../../../utils/FormatValuePrice";
import { CardContainer, AddOrRemoveContainer, NameCoffee, PriceOrder, Tags, ValueCard } from "./styles";

export interface CardCoffeeProps {
    id: string;
    content: string;
    name: string;
    img: string;
    value: number;
    tags: string[];
}

export function CardCoffee({ content, name, img, value, tags}:CardCoffeeProps ) {

    const [ quantityProducts, setQuantityProducts ] = useState(0);

    const FormattedValue = formatValuePrice(value)

    return (
        <CardContainer>
            <img src={img} alt="" />
            <Tags>
                {tags.map((tag, index) => {
                    return (
                        <span key={index}>{tag}</span>
                    )
                })}
            </Tags>
            <NameCoffee>{name}</NameCoffee>
            <TextRegular size="sm" color="label">{content}</TextRegular>
            <PriceOrder>
                <ValueCard>
                    <TextRegular size="sm" color="text">
                        R$
                    </TextRegular>
                    <TextTitle size="md" color="text" as="strong">
                            {FormattedValue}
                    </TextTitle>
                </ValueCard>
                <AddOrRemoveContainer>
                    <QuantityProductInput />
                    <button>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </AddOrRemoveContainer>
            </PriceOrder>
        </CardContainer>
    )
}