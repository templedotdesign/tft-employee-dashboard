//Core
import React from 'react';

//Components
import Wrapper from '../wrapper/wrapper';
import Header from './header/header';
// import Footer from './footer/footer';

const layout = (props) => {
  return (
    <Wrapper>
      <Header/>
      {props.children}
      {/* <Footer/> */}
    </Wrapper>
  );
}

export default layout;