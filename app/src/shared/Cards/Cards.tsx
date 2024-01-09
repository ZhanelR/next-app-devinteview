import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card'; // Подключаем обновленный компонент Card
import { IQuestion } from '@/app/entities/question/question';
import { ICollection } from '@/app/entities/collection/collection';
import { ICategory } from '@/app/entities/category/category';
import { useRouter } from 'next/navigation'


interface IStyledCardsContainerProps {
  $justify?: "space-around" | "space-between"
}

const StyledCardsContainer = styled.div<IStyledCardsContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.$justify};
`;


interface CardsProps {
    dataList: IUniversalData[]
    onCardClick: (slug: string)=> void
}

export type TEntityType = "category" | "collection" | "question"

//описываю что может мапиться в карточке
export interface IUniversalData {
    id: string
    title: string
    description: string
    slug: string
    type: TEntityType
}


const Cards: React.FC<CardsProps> = ({ dataList, onCardClick }) => {


  return (
    <StyledCardsContainer>
      {dataList.map((data: IUniversalData) => (
        <Card
          key={data.id}
          firstline={data.id}
          fourthline={data.slug}
          secondline={data.title}
          thirdline={data.description}
          fDirection="column" // Устанавливаем направление для каждой карточки
          onClick={()=> {onCardClick(data.slug)}}
        />
      ))}
    </StyledCardsContainer>
  );
};

export default Cards;
