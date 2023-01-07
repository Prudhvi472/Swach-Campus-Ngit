import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import Imgs from './Imgs';

let flightNumber  = "";
function HeroSection() {
  const[val,setval] = React.useState("")
  const[sub,setsub] = React.useState(false)

  function handleSubmit(e){
    e.preventDefault();
    flightNumber = val;
    setsub(true)
    console.log(flightNumber);
  }

  return (
    <>
    <div className='hero-container'>
      <h1>Enter Flight Number</h1>
      <div className='hero-btns'>
        <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Flight Number" 
          className='input-btn'
          value={val}
          onChange={(e) => setval(e.target.value)}
          />
        <button className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>
      <Imgs display={sub} flight={flightNumber}/>
      </>
  );
}

// module.exports = async function(){
  //   export default he
  //   return flightNumber;
  // }
  
  
  {/* <Imgs /> */}
  {/* <button className='final-btn'>Create Ticket</button> */}


export default HeroSection;

{/* <Button
className='btns'
buttonStyle='btn--primary'
buttonSize='btn--large'
onClick={console.log('hey')}
>
Input Here
</Button>
<Button
className='btns-submit'
buttonStyle='btn--primary'
buttonSize='btn--large'
onClick={console.log('hey')}
>
Submit
</Button> */}
{/* <button onClick={} */}