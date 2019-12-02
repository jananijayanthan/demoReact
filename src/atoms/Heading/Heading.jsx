import React from 'react';
import styled from 'styled-components';

// // What would go instead of h1 here to apply for all the different headings
// const HeaderWrapper = styled.h1`
    
//     &.red {
//         color: ${({theme}) => {
//             theme.color.primary
//         }};
//     }
//     &.blue { color: blue;}
// `;



// How would we pass h1, h2, ect to this ? :/
export default ({children, style}) => (
    <h1 className={style}>{children}</h1>
);