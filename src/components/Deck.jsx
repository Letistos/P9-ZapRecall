import Card from './Card.jsx';
import styled from 'styled-components';

export default function Deck(){
    return(
        
        <StyleDeck>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </StyleDeck>
       
    );
}
const StyleDeck = styled.div`
    background-color:#FB6B6B;
    height:70vh;
    display:flex;
    flex-direction:column;
    align-items:center;

`
