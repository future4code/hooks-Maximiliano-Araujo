import { v4 as generator } from 'uuid';
export type Products = {id: string, name: string, price: number}

export const products: Products [] = [
    {
        id: generator(),
        name: "Banana",
        price: 10
    },
    {
        id: generator(),
        name: "Melância",
        price: 12
    },
    {
        id: generator(),
        name: "Maça",
        price: 7
    }
]