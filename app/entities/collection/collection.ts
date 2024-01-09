import { IUniversalData } from "@/app/src/shared/Cards/Cards"
import { IQuestion, mockQuestions } from "../question/question"

export interface ICollection extends IUniversalData{
/*     id: string
    title: string
    description: string
    slug: string */
    questions: IQuestion[] 
}

export const mockCollection:ICollection = {
    id:"123ghf7789id12155",
    title: "HTML",
    description: "",
    slug: "html",
    questions: mockQuestions,
    type: "collection"
}

export const mockCollection1:ICollection = {
    id:"123ghf7789id12155css",
    title: "CSS",
    description: "",
    slug: "css",
    questions: mockQuestions,
    type: "collection"

}


export const mockCollection2:ICollection = {
    id:"123ghf7789id12155js",
    title: "JS",
    description: "",
    slug: "js",
    questions: mockQuestions,
    type: "collection"

}

export const mockCollections:ICollection[] = [
    mockCollection, mockCollection, mockCollection
]

export const mockCollections2:ICollection[] = [
    mockCollection2, mockCollection2, mockCollection2
]