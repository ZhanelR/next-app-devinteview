"use client"

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function HeaderLink () {
    return (
    <>
        <StyledLink href="/questions">
            Questions
        </StyledLink>
        <StyledLink href="/interview">
            Interview
        </StyledLink>
        <StyledLink href="/reports">
            Reports
        </StyledLink>
    </>
    );
};