export type User = { name: string, cpf: string, birthday: string, balance: number , extract: ExtractArray[]}
export type ExtractArray = {val: number, description: string, date: string}

export const user: User[] = [ {
        name: "Max",
        cpf: "123456789",
        birthday: "20/06/1992",
        balance: 178.78,
        extract: []
    },
    {
        name: "Sofia",
        cpf: "123456756",
        birthday: "20/06/1995",
        balance: 398.92,
        extract: []
    },
    {
        name: "Morgana",
        cpf: "123456756",
        birthday: "20/06/1995",
        balance: 987.25,
        extract: []
    }
]