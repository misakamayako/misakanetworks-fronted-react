export interface Response<T> {
    data: T,
    status: number,
    message: string
}

export interface Pagination<T> {
    total: number,
    page: number,
    pageSize: number,
    data: T[]
}

export interface CategoryOfArticleSumDTO {
    category: string,
    id: number,
    count: number
}

export interface UserDTO {
    id: number,
    name: string
}

export interface LoginDTO {
    name: string,
    password: string
}

export interface ArticleUploadVo{
    title:string
    categories:number[]
    content: string
}
export interface PageQuery{
    page?:number,
    pageSize?:number
}
