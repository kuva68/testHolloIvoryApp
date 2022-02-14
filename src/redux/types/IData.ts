export interface IUser {
    name: string,
    number: number | null,
    team: string
}
export interface IUserFromServer {
    characters: []
    createdAt: string
    logoId: number
    name: string
    number: number
    team: string
    updatedAt: string
    __v: number
    _id: string
}