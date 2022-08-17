type usuarios = { id: number, name: string, phone: number, email: string, website: string }
type post = { id: number, title: string, body: string, userId: number }

export const user: usuarios[] = [
    {
        id: 1,
        name: "Max",
        phone: 90943093409430,
        email: "max@email.com",
        website: "max.com.br"
    },
    {
        id: 2,
        name: "Sofia",
        phone: 197237623,
        email: "sofia@email.com",
        website: "sofia.com.br"
    },
    {
        id: 3,
        name: "Morgana",
        phone: 9657823092,
        email: "morgana@email.com",
        website: "morgana.com.br"
    }
]

export const post: post[] = [
    {
        id: 1,
        title: "nova foto",
        body: "fotin",
        userId: 1
    },
    {
        id: 2,
        title: "nova foto 2",
        body: "fotinha",
        userId: 2
    },
    {
        id: 3,
        title: "nova foto 3",
        body: "fotinhaz",
        userId: 3
    }
]

