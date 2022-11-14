function CalculatorOperators(props){



return (
    <>
    <button className='oprators addition'>+</button>
    <button className='oprators minus'>-</button>
    <button className='oprators multiplication'>*</button>
    <button className='oprators devision'>/</button>
    <button className='oprators persentage'>%</button>
    <button className='clear oprators'>Cl</button>  
    {props.children}
    <button>=</button>
    <button className='prev'>prev</button>
    </>

)


}


export default CalculatorOperators