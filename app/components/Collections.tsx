import Link from 'next/link'; 
import styled from 'styled-components'; 
import { IQuestion } from '../entities/question/question';
import { FC } from 'react';
import Cards from '../src/shared/Cards/Cards';
import { useRouter } from 'next/navigation';


interface CollectionsProps {
  collectionsList: IQuestion[];
  categorySlug: string
}

const Collections: FC<CollectionsProps> = ({ collectionsList, categorySlug }) => {

  const router = useRouter()

  const onCardClick = (slug: string) => {
    router.push(`/${categorySlug}/${slug}`)
  }
  
  return (
    <>
      <h1>Collections List</h1>
      <Cards dataList={collectionsList} onCardClick = {onCardClick} /> {/* Используем компонент Cards */}
    </>
  );
};

export default Collections;
