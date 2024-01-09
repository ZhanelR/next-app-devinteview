import { IUniversalData } from "@/app/src/shared/Cards/Cards"
import { ICollection, mockCollections, mockCollections2 } from "../collection/collection"

export interface ICategory extends IUniversalData{
/*     id: string
    title: string
    description: string
    slug: string */
    collections: ICollection[] 
}

export const mockCategory:ICategory = {
    id:"123ghf7789id",
    title: "Front-End",
    description: "",
    slug: "front-end", 
    collections: mockCollections,
    type: "category"

}
export const mockCategory1:ICategory = {
    id:"123ghf7789id12221111111",
    title: "Back-End",
    description: "",
    slug: "back-end", 
    collections: mockCollections2,
    type: "category"

}

export const mockCategory2:ICategory = {
    id:"123ghf7789id122211111117",
    title: "QA",
    description: "",
    slug: "qa", 
    collections: mockCollections,
    type: "category"

}

export const mockCategories:ICategory[] = [
    mockCategory, mockCategory1, mockCategory2
]
