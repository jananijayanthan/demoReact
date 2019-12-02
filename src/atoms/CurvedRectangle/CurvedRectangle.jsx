import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const CurvedRectangleWrapper = styled.p`
    
&.curved {
    width: ${theme.values.width};
    height: ${theme.values.height};
    borderRadius: ${theme.values.borderRadius/2};
    color: ${theme.colors.primary};

    @media only screen and (min-width: {THEME.screensize.tablet}) {
    }
}

`;

export default ({children, style}) => {
    console.log('theme2', theme)
    return(

        <CurvedRectangleWrapper className={style}>{children}</CurvedRectangleWrapper>
    )
};