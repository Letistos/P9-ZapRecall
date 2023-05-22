import cards from "./Cards.js";
import styled from 'styled-components';
import seta_play from "../assets/seta_play.png"
export default function Card(){
    return(
        <>
        <div>
            <h2>Pergunta 1</h2>
            <img src={seta_play} alt="icone flashcard triângulo"/>
        </div>
        </>
    );
}