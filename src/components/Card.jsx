import cards from "./Cards.js";
import styled from 'styled-components';
import seta_play from "../assets/seta_play.png"
export default function Card(){
    return(
        
        <FaceDownCard>
            <h2>Pergunta 1</h2>
            <img src={seta_play} alt="icone flashcard triângulo"/>
        </FaceDownCard>
        
    );
}
const FaceDownCard=styled.div`
    width:300px;
    height:65px;
    padding:15px;
    background-color:#FFFFFF;
    font-family:'Recursive';
    font-weight:700;
    font-size:16px;
    line-height:19.2px;
    color:#333333;
    margin-bottom:25px;
    border-radius:5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    display:flex;
    align-items:center;
    justify-content:space-between;
    img{
        width:20px;
        height:23px;
    }
`