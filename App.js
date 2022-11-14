import './App.css';
import React,{useState} from 'react';
import CalculatorOperators from './Calculator/Buttons/CalculatorOperators';
import NumericButtons from './Calculator/Buttons/NumericButtons,';
import  CalculatorInput from './Calculator/CalculatorInput/CalculatorInput'
function App() {


  let [currentButtonValue,stateUpdate] = useState('')

  const enterdNumber = (e)=>{
    console.log(e.target.className)
  if(!e.target.className ||e.target.className.split(' ')[0]==='oprators'){
  stateUpdate(e.target.textContent)
  }
  }
  
       

  return (
<div className="App">
    <div className='body'>
      <CalculatorInput value={currentButtonValue}/>
     <div className='button-parent' onClick={enterdNumber}>    
                  <CalculatorOperators>
             <NumericButtons></NumericButtons>   
             </CalculatorOperators>  
     </div> 
    </div>
</div>
  );
}

export default App;
