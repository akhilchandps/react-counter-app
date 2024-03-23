import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Main.css'
function Main() {
    const [counter,setCounter] = useState(0)

function IncrementCounter()
{
    setCounter(counter+1)
}
  
function DecrementCounter()
{
    if(!counter == 0)
    {
        setCounter(counter-1)
    }
    
}
function ResetCounter()
{
    setCounter(0)
}

  return (
    <div className='container'><Card className="text-center my-4 box py-3">
    <Card.Header> <h1>Counter App</h1></Card.Header>
    <Card.Body>
      <Card.Title ><h1 style={{fontSize:
    "50px"}}>{counter}</h1>
      </Card.Title>
     
      <Button variant="success" className='m-3' onClick={IncrementCounter} style={{borderRadius:"50px"}}>Increment</Button>
      <Button variant="danger"className='m-3' onClick={DecrementCounter} style={{borderRadius:"50px"}}>Decrement</Button>
      <Button variant="secondary" className='m-3'onClick={ResetCounter} style={{borderRadius:"50px"}}>Reset</Button>
    </Card.Body>
   
  </Card>
  </div>
  )
}

export default Main