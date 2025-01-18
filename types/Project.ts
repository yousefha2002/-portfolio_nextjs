export type Project = {
    id:number,
    title:string,
    description:string,
    images:string[],
    githubLink:string,
    headline:string,
    usecases?:useCase[]
    skills:string[],
    livelink?:string

}

export type useCase = {
    role:string,
    functions:string[]
} 