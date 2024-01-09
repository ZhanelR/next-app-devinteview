import React, { FC } from 'react';
import styled from 'styled-components';

//определяю свойства, которые могут использоваться для СТИЛИЗАЦИИ текста
interface StyledTextProps {
  size?: string;
  color?: string;
  fontWeight?: string;
  lineHeight?: string;
}

//определяю свойства, которые могут использоваться для ТЕКСТА
interface TextProps {
  size?: string;
  color?: string;
  fontWeight?: string;
  lineHeight?: string;
}

//Это стиль  использует параметры из StyledTextProps в <>,
const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || '#000000'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: ${(props) => props.lineHeight || 'normal'};
`;


//сам компонент:
const Text: FC<TextProps> = ({
  size,
  color,
  fontWeight,
  lineHeight,
}) => {
  return (
    <StyledText
      size={size}
      color={color}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
    </StyledText>
  );
};

export default Text;
