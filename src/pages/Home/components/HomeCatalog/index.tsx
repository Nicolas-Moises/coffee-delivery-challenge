import { CardCoffee } from "../CardCoffee";
import { CardGrid, CatalogContainer } from "./styles";
import { products } from "../../../../constants"

export function HomeCatalog() {
    return (
        <CatalogContainer>
            <h1>Nossos cafés</h1>

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