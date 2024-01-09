import { FC } from 'react';
import Card from '../src/shared/Card/Card';
import { IQuestion } from '../entities/question/question';
import Cards from '../src/shared/Cards/Cards';
import { useRouter } from 'next/navigation';

interface CategoriesProps {
  categoriesList: IQuestion[];
}


const Categories: FC<CategoriesProps> = ({ categoriesList }) => {
  const router = useRouter()

  const onCardClick = (slug: string) => {
    router.push(`/${slug}`)
  }
  return (
    <>
      <h1>Categories List</h1>
      <Cards onCardClick = {onCardClick} dataList={categoriesList} /> {/* Используем компонент Cards */}
    </>
  );
};

export default Categories;
