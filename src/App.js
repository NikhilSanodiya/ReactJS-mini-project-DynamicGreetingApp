import React from 'react';
import './App.css'

let cdate = new Date();
cdate = cdate.getHours();
let greeting = '';
const css= {};

const body = {
  
  boxSizing : 'border-box',
  margin :  '0',
  padding : '0%',
  fontFamily : '"Montserrat", sans-serif'

};

if (cdate >=1 && cdate<12){
  greeting = 'Good Morning';
  css.color = '#557571';
  body.backgroundColor = '#557571';
}else if(cdate>=12 && cdate<19){
  greeting = 'Good Afternoon';
  css.color = '#f1ae89';
  body.backgroundColor = '#f1ae89';
}else{
  greeting = 'Good Night';
  css.color = '#383e56';
  body.backgroundColor = '#383e56';
  
}

function App() {
  return (
    <div style = {body}>
    <h1 >Hello sir ! <span style = {css}>{greeting}</span></h1>
    </div>
     )



}

export default App;
