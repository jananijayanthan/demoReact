import React from "react";
import { hot } from 'react-hot-loader/root';
import { PlainText, CTA, DropDown, Circle } from './atoms';
import { ThemeProvider } from 'styled-components';
import {default as GlobalStyle} from './styles/globalStyle';

import theme from './styles/theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <h1>H1 here</h1>
          {/* <DropDown name='name' value='value' handleChange={()=>''} options={[1,2]} /> */}
          <PlainText style='red'>hello</PlainText>
          <PlainText style='blue'>hello</PlainText>
          <CTA ctaType='button'>this is a button</CTA>
          <CTA ctaType='a' href='https://google.com'>this is a link</CTA>
          <Circle style='circle'></Circle>
        </div>
      </ThemeProvider>
    );
  }
}

export default hot(App);