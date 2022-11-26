import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CardContainer, IncrementOrDecrease, PriceOrder, Tags, ValueCard } from "./styles";

export interface CardCoffeeProps {
    content: string;
    name: string;
    img: string;
    value: string;
    tags: string[];
}

export function CardCoffee({ content, name, img, value, tags}:CardCoffeeProps ) {

    const [ quantityProducts, setQuantityProducts ] = useState(0);

    function handleIncrementItem() {
        setQuantityProducts(quantityProducts + 1)
    }

    function handleDecreaseItem() {
        if(quantityProducts > 0) {
            setQuantityProducts(quantityProducts - 1)
        } return 
    }

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
            <h3>{name}</h3>
            <p>{content}</p>
            <PriceOrder>
                <ValueCard>
                    <p>
                        R$
                        <span>
                            {value}
                        </span>
                    </p>
                </ValueCard>
                <div>
                    <IncrementOrDecrease>
                        <Minus onClick={handleDecreaseItem} size={14} weight='bold' />
                        <span>{quantityProducts}</span>
                        <Plus onClick={handleIncrementItem} size={14} weight='bold' />
                    </IncrementOrDecrease>

                    <button >
                        <ShoppingCart weight="fill" size={22} />
                    </button>
                </div>
            </PriceOrder>
        </CardContainer>
    )
}