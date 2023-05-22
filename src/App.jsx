import favicon from '/favicon.ico';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Deck from './components/Deck';
import Footer from './components/Footer';
import { useState } from 'react';

function App() { 
  const [counter,setCounter]=useState(0)

  return (
       <>
    <GlobalStyle/>
    <Header/>
    <Deck/>
    <Footer counter={counter}/>
  </>
  )
}

    

export default App
