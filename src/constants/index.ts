import {american,
    arabian,
    capuccino,
    irish,
    hawaiian,
    cuban,
    express,
    latte,
    machiatto,
    mochaccino,
    coffeeWithMilk,
    icedCoffee,
    hotChocolate,
    creamyExpress} from '../assets';

export const products = [
    {
        id: "product-1",
        name: "Expresso Tradicional",
        img: express,
        tags: ["Tradicional"],
        content: "O tradicional café feito com água quente e grãos moídos",
        value: 9.90,
    },
    {
        id: "product-2",
        name: "Expresso Americano",
        img: american,
        tags: ["Tradicional"],
        content: "O tradicional café feito com água quente e grãos moídos",
        value: 9.90,
    },
    {
        id: "product-3",
        name: "Expresso Cremoso",
        img: creamyExpress,
        tags: ["Tradicional"],
        content: "Café expresso tradicional com espuma cremosa",
        value: 9.90,
    },
    {
        id: "product-4",
        name: "Expresso Gelado",
        img: icedCoffee,
        tags: ["Tradicional", "Gelado"],
        content: "Bebida preparada com café expresso e cubos de gelo",
        value: 9.90,
    },
    {
        id: "product-5",
        name: "Café Com Leite",
        img: coffeeWithMilk,
        tags: ["Tradicional", "Com leite"],
        content: "Meio a meio de expresso tradicional com leite vaporizado",
        value: 9.90,
    },
    {
        id: "product-6",
        name: "Latte",
        img: latte,
        tags: ["Tradicional", "Com leite"],
        content: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        value: 9.90,
    },
    {
        id: "product-7",
        name: "Capuccino",
        img: capuccino,
        tags: ["Tradicional", "Com leite"],
        content: "Bebida com canela feita de doses iguais de café, leite e espuma",
        value: 9.90,
    },
    {
        id: "product-8",
        name: "Machiatto",
        img: machiatto,
        tags: ["Tradicional","Com leite"],
        content: "Café expresso misturado com um pouco de leite quente e espuma",
        value: 9.90,
    },
    {
        id: "product-9",
        name: "Mocaccino",
        img: mochaccino,
        tags: ["Tradicional", "com leite"],
        content: "Café expresso com calda de chocolate, pouco leite e espuma",
        value: 9.90,
    },
    {
        id: "product-10",
        name: "Chocolate Quente",
        img: hotChocolate,
        tags: ["Tradicional", "com leite"],
        content: "Bebida feita com chocolate dissolvido no leite quente e café",
        value: 9.90,
    },
    {
        id: "product-11",
        name: "Cubano",
        img: cuban,
        tags: ["especial", "alcoólico", "gelado"],
        content: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        value: 9.90,
    },
    {
        id: "product-12",
        name: "Havaiano",
        img: hawaiian,
        tags: ["especial"],
        content: "Bebida adocicada preparada com café e leite de coco",
        value: 9.90,
    },
    {
        id: "product-13",
        name: "Árabe",
        img: arabian,
        tags: ["especial"],
        content: "Bebida preparada com grãos de café árabe e especiarias",
        value: 9.90,
    },
    {
        id: "product-14",
        name: "Irlandês",
        img: irish,
        tags: ["especial", "alcoólico"],
        content: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        value: 9.90,
    },

] 