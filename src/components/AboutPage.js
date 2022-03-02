import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/profile.jpg'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:200vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: fixed;
top: 10%;
right: 5%;
width: 25vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: 100%;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 150vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`


const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a software developer located in South Africa, a place of beauty and nature.
          <br/><br/>
          I love to create simple yet beautiful websites with great user experience.
          I love art and design. I always try to design stuff with my unique point of view.
          I also love to create things that can be usefull to others.
          <br /> <br />
          I'm interested in the whole full stack like how data flows from frontend to backend to database.
          I'm an independent freelancer and a hustler, always trying to find ways to better my skillset and build networks.
          <br /> <br />
          I love to read books and i take charge of my onw personal development.
          I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
          <br/><br/>
          EDUCATION BACKGROUND.<br/>
          School: Sekgosese High School<br/>
          Varsity: University Of Wits/ University of Johanessburg
          <br/><br/>
          EXPERIENCE.<br/>
          2019-2020: Junior software developer @ The digital Academy<br/>
          2021-2022: Software developer @ Fincamp<br/>
          2020-2022: Freelance Developer/Designer<br/>
          2021-2022: Digital transformation team at @Entrepreneur Gauteng

        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%"/>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
