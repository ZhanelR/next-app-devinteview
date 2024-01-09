//универсальный компонент карточки

import React from 'react'
import styled from 'styled-components';

type TFDirection = "row" | "column"  //тип для интерфейса, говорю, что флекс - расположение либо строчное, либо в колонку

//для стиля создаю интерфейс
interface IStyledCardContainerProps {
    $fDirection: TFDirection 
}

const StyledCardContainer = styled.div<IStyledCardContainerProps>`
display: flex;
gap: 20px;
padding: 20px; 
margin: 30px;
border: 1px solid #ccc; 
border-radius: 8px; 
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
background-color: #4a4545; 
max-width: 400px; 
transition: background-color 0.3s ease; /* добавляем анимацию перехода */
${(prop) => prop.$fDirection === "column" && "flex-direction: column;" }

&:hover {
  background-color: #a5a5a5; /* меняем цвет при наведении */
}


//выше написано:так как дисплей флекс, и по умолчанию в CSS дирекшн идет row,  
//и если передается в пропсах column, дирекш меняется 
`;


interface ICardProps {
    firstline: React.ReactNode
    secondline: React.ReactNode
    thirdline: React.ReactNode
    fourthline: React.ReactNode
    fDirection?: TFDirection
    onClick: ()=> void
}
const Card: React.FC<ICardProps> = ({
    firstline, secondline, fourthline, fDirection="row", thirdline, onClick
}) => {
  return (
    <StyledCardContainer onClick={onClick} $fDirection={fDirection}>
    <p>{firstline}</p>
    <p>{secondline}</p>
    <p>{thirdline}</p>
    <p>{fourthline}</p>
    </StyledCardContainer>
  )
}

export default Card