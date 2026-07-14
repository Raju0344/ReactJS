import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  // function random(){
  //   const a = Math.random()
  //   console.log(a);
  // }
  // random()

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log('use effect is running')
  }, [num])



  return (
    <div>
      <h1>The value of num is :{num}</h1>
      <h1>The value of num2 is : {num2}</h1>
      <button onMouseEnter={() => {
        setNum(num+1)
      }}
      onMouseLeave={() => {
        setNum2(num2+100)
      }}
      >click</button>
    </div>
  )
}

export default App