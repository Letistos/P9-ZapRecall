import styled from 'styled-components';
import cards from './Cards.js';
import { useState } from 'react';

export default function Footer({counter}){
    return(
        <StyleFooter>
        <h1 data-test="footer">{counter}/{cards.length} CONCLUÍDOS</h1>
        </StyleFooter>
    );
}

const StyleFooter = styled.div`
    font-family:'Recursive';
    font-weight:400;
    font-size:18px;
    line-height:21.6px;
    color:#333333;
    background-color:#FFFFFF;
    display:flex;
    align-items:center;
    justify-content:center;
    height:10vh;
    width:100%;
    position:fixed;
    left:0;
    bottom:0;
    z-index:2;
`