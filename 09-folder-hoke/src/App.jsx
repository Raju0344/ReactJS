import React, { useState } from 'react'

const App = () => {

  const [num,setNum] = useState(0);

  function increaseNum() {
    console.log(num)
    setNum(num+1);
    console.log(num);

  }

  function decreaseNum() {
    setNum(prev => (prev - 1)); // batch update in the React.
    setNum(prev => (prev - 1));
    setNum(prev => (prev - 1));
  }

  function jumpbyfive() {
    setNum(num+5);
  }


  const [arr, setArr] = useState({user:"raju", age:19})

  const btnClicked= () => {
    setArr(prev => ({...prev, age:50}))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jumpbyfive}>jumpby5</button>

      <div className='hello'>
        <h1>{arr.user}, {arr.age}</h1>
        <button onClick={btnClicked}>Click me!</button>
      </div>
    </div>
  )
}

export default App