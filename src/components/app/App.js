import React from 'react';
import Menu from '../menu/menu';
import AboutMe from '../aboutme/aboutme';
import Contacts from '../contacts/contacts';
import Education from '../education/education';
import Qualities from '../qualities/qualities';
import Skills from '../skills/skills';
import Examples from '../examples/examples';
import MoreInfo from '../moreinfo/moreinfo';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 110px 0px 70px;
  width: 800px;
  border: solid 2px #54687a;
  background: #f1e4e4;
  height: 100%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.4), 0 10px 10px rgba(0,0,0,0.2);
`;
function App() {
  return (
    <Container>
      <Menu/>
      <AboutMe/>
      <Contacts/>
      <Education/>
      <Qualities/>
      <Skills/>
      <Examples/>
      <MoreInfo/>
    </Container>
  );
}

export default App;