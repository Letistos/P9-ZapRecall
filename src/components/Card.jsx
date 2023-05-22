import { useState } from 'react';
import styled from 'styled-components';
import seta_play from '../assets/seta_play.png';
import seta_virar from'../assets/seta_virar.png';
import certo from '../assets/icone_certo.png';
import quase from '../assets/icone_quase.png';
import erro from '../assets/icone_erro.png';
import {yellow} from './Colors'
import {orange} from './Colors'
import {red} from './Colors'
import {black} from './Colors'
import {green} from './Colors'


export default function Card({index,cards}){
    const[selectCard,setSelectedCard] = useState(false)
    const[turnCard,setTurnCard] = useState(false)
    const[finishedCard,setFinishedCard] = useState(false)
    const[type,setTypeOfAnswer] = useState("seta")
    function seeQuestion (){
        if(!finishedCard){
        setSelectedCard(true)
    }
    }
    function checkAnswer(){
        setTurnCard(true)
    }
    function answerButton(type){
        setSelectedCard(false)
        setFinishedCard(true)
        setTypeOfAnswer(type)
    }
    function answerIcon(){
        switch(type){
        case "wrong":
        return erro
        case "kindOf":
        return quase
        case "right":
        return certo
        default:
            return seta_play
        }
    }
    return(
        <>
        {!selectCard ? ( <FaceDownCard type={type}>
        <h2 data-test="flashcard-text">Pergunta {index+1}</h2>
         <img data-test="play-btn" onClick={seeQuestion} src={answerIcon()} alt="icone flashcard triângulo"/>
        </FaceDownCard>
        ):(
              <FaceUp data-test="flashcard-text">
                {!turnCard? (
                    <>
                     {cards.question}
                     <img data-test="turn-btn" onClick={checkAnswer} src={seta_virar} alt="botão de virar"/>
                     </>
                ):(<>
                  {cards.answer}
              <Buttons>
                <ColorButton data-test="no-btn" background={red} onClick={() => answerButton("wrong")}>Não Lembrei</ColorButton>
                <ColorButton data-test="partial-btn" background={orange} onClick={() => answerButton("kindOf")}>Quase Lembrei</ColorButton>
                <ColorButton data-test="zap-btn" background={green} onClick={() => answerButton("right")}>Zap!</ColorButton>
                </Buttons>
                </>

                )}
    
             </FaceUp>
        )}
        </>
         
        
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
    color:${props => {

        switch(props.type){
            case "wrong":
            return red
            case "kindOf":
            return orange
            case "right":
            return green
            default:
                return black
            }
    }};
    text-decoration:${props => props.type === "seta"? "none": "line-through"};
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

const FaceUp=styled.div`
    width:300px;
    height:165px;
    background-color:#FFFFD4;
    margin-bottom:25px;
    box-sizing:border-box;
    font-family:Recursive;
    font-weight:400;
    font-size:16px;
    line-height:19.2px;
    color:#333333;
    padding:15px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:space-between;
    text-align: left;
    position:relative;
img{
    position:absolute:
    bottom:0;
    margin-left:250px;
    width:20px;
    height:23px;
}
   
`
const Buttons = styled.div`
    width:270px;
    color:#FFFFFF;
    font-family: Recursive;
    font-weight: 400;
    font-size:12px;
    Line-height:14.4px;
    display:flex;
    justify-content:space-between;
    
    
`
const ColorButton = styled.button`

    background-color:${props => props.background};
    width:85.17px;
    height:37.17px;
    border-radius:5px;
`