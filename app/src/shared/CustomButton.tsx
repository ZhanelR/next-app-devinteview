import React from 'react';
import styled from 'styled-components';

//определяю свойства, которые могут использоваться для  кнопки
interface StyledButtonProps {
  width?: string;
  height?: string;
  onClick?: () => void;   // это тип функции. () => void указывает на то, что функция 
  //не принимает аргументов (()) и не возвращает никакого значения (void).
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
}

//интерфейс
interface CustomButtonProps {
  width?: string;
  height?: string;
  onClick?: () => void;   
  text: string;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
}

//Это стиль  использует параметры из StyledButtonProps в <>,
const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => props.width || '150px'};
  height: ${(props) => props.height || '50px'};
  background-color: ${(props) => props.bgColor || '#3498db'};
  color: ${(props) => props.textColor || '#ffffff'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor || '#2980b9'};
  }
`;

//сам компонент:
const CustomButton: React.FC<CustomButtonProps> = ({
  width,
  height,
  text,
  onClick,
  bgColor,
  textColor,
  hoverColor,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      bgColor={bgColor}
      textColor={textColor}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;
