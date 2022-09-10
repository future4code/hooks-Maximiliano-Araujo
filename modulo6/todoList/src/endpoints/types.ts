export type User = {
    id: Number, 
    name: string, 
    nickname: string, 
    email: string
}

export enum TODOS {
    TODO = "To do",
    DOING = "Doing",
    DONE = "Done"
}

export type Task = {
    id: Number, 
    title: string, 
    description: string,   
    status: TODOS,
    limit_date: any,
    creator_user_id: Number
}

