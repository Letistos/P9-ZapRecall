import { useState } from 'react';
import Card from './Card.jsx';
import cards from './Cards.js';
import styled from 'styled-components';

export default function Deck(){
    
    return(
        
        <StyleDeck>

        {cards.map((question,i)=><Card key={question.question} index={i} cards={question}/>)}
     
        </StyleDeck>
       
    );
}
const StyleDeck = styled.div`
    background-color:#FB6B6B;
    
    margin-top:20vh;
    margin-bottom:10vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-sizing:border-box;
    overflow:scroll;
    ::-webkit-scrollbar{
        display: none;
    }

`
