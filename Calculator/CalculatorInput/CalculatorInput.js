import './CalculatorInput.css'
import React, {useEffect, useRef, useState} from 'react';
const oprands = ['+','-','*','/','%']

let num ='';
let InputValue = '';



function CalculatorInput(props){


const InputEl = useRef('') 



useEffect(()=>{
InputEl.current.value+=props.value
},[props.value])

const preventText = ()=>{   


let inputValue = InputEl.current.value.split("")
if(inputValue.every((el)=>+el||el==0 || oprands.includes(el))){
 num = InputEl.current.value 
}else{    
InputEl.current.value = num  

}


}




return (
<div className='input-parent'>
<p>0</p>    
<input type="text" ref={InputEl} onChange={preventText}  />
</div>
)


}


export default CalculatorInput
