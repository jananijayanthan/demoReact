import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const PlainTextWrapper = styled.p`
    
&.red {
    color: ${ theme.colors.primary };

    @media only screen and (min-width: {THEME.screensize.tablet}) {
    }
}

&.blue { color: blue;}
`;

export default ({children, style}) => {
    console.log('theme2', theme)
    return(

        <PlainTextWrapper className={style}>{children}</PlainTextWrapper>
    )
};