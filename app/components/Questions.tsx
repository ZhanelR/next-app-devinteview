import { FC } from 'react';
import Card from '../src/shared/Card/Card';
import { IQuestion } from '../entities/question/question';
import Cards from '../src/shared/Cards/Cards';
import { useRouter } from 'next/navigation';


interface QuestionsProps {
  questionsList: IQuestion[];
  categorySlug: string;
  collectionSlug: string
}

const Questions: FC<QuestionsProps> = ({ questionsList, categorySlug, collectionSlug }) => {
  const router = useRouter()

  const onCardClick = (slug: string) => {
    router.push(`/${categorySlug}/${collectionSlug}/${slug}`)
  }

  return (
    <>
      <h1>Questions List</h1>
      <Cards dataList={questionsList} onCardClick={onCardClick}/> {/* Используем компонент Cards */}
    </>
  );
};

export default Questions;
