import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const CircleWrapper = styled.p`
    
&.circle {
    width: ${theme.values.radius};
    height: ${theme.values.radius};
    border-radius: ${theme.values.borderRadius};
    background-color: ${theme.colors.primary};

    @media only screen and (min-width: {THEME.screensize.tablet}) {
    }
}

`;

export default ({children, style}) => {
    console.log('theme2', theme)
    return(

        <CircleWrapper className={style}>{children}</CircleWrapper>
    )
};