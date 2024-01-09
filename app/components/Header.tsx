import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import HeaderLink from './HeaderLink';

const StyledLinksContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export default function Header () {
    return (
    <>
        <StyledLinksContainer>
            <HeaderLink/>
        </StyledLinksContainer>
    </>
    );
};