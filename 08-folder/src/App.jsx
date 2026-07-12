import React from 'react'

const App = () => {

  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App





