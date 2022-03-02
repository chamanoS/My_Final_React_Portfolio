import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import Me from '../assets/Images/logox.png'


const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          <img className="pic" src={Me} width={75} height={75} alt="Profile Pic" />
        </Logo>
    )
}

export default LogoComponent
