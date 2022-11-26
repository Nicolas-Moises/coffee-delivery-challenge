import { CardCoffee } from "../CardCoffee";
import { CardGrid, CatalogContainer } from "./styles";
import { products } from "../../../../constants"
import { TextTitle } from "../../../../components/TextStyles";

export function HomeCatalog() {
    return (
        <CatalogContainer>
            <TextTitle size="lg" color="subtitle">
                Nossos cafés
            </TextTitle>

            <CardGrid>
                {products.map((product) => {
                    return (
                        <CardCoffee key={product.id} {...product}  />
                    )
                })}
            </CardGrid>
        </CatalogContainer>
    )
}