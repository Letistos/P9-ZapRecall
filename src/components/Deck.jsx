import Card from './Card.jsx';
import cards from './Cards.js';
import styled from 'styled-components';

export default function Deck(){
    return(
        
        <StyleDeck>

        {cards.map((question,i)=><Card key={cards.question} index={i}/>)}
     
        </StyleDeck>
       
    );
}
const StyleDeck = styled.div`
    background-color:#FB6B6B;
    height:70vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:scroll;

`
