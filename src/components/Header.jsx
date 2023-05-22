import logo from '../assets/logo.png'
import styled from 'styled-components';

export default function Header(){
    return(
        <> 
        <StyleHeader>            
        <img src={logo} alt= "logotipo Zap Recall"/>
        <h1>ZapRecall</h1>
        </StyleHeader>
        </>
 
    )
}
const StyleHeader = styled.div`
    font-family:'Righteous';
    font-weight:400;
    font-size:36px;
    line-height:44.7px;
    color:#FFFFFF;
    background-color:#FB6B6B;
    display:flex;
    align-items:center;
    justify-content:center;
    height:30vh;
    top:0;
    bottom:0;
    img{
        width:52px;
        height:60px;
        margin:20px;
    }
`
