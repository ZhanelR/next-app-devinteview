import { IUniversalData } from "@/app/src/shared/Cards/Cards"

//тут мы как бы подсказываем бэку,в каком виде принимать данные
export interface IQuestion extends IUniversalData{
/*     id: string
    title: string
    description: string
    slug: string */
}

//создаю пример вопроса 
export const mockQuestion:IQuestion = {
    id: "hggeb23ned",
    title: "How are you?",
    description: "today",
    slug: "how-are-you",
    type: "question"
}

//созд массив всех вопросов 
export const mockQuestions:IQuestion[] = [
    mockQuestion, mockQuestion, mockQuestion
]