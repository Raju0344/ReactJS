import React from 'react'

const App = () => {

  // localStorage.clear();
  // sessionStorage.clear();
  // localStorage.setItem('user', 'Raju karmakar');
  // let vval = localStorage.getItem('user'); //  To get element form the local storage
  // console.log(vval);
  // localStorage.setItem('age', 24); // To set element from the local stroage.
  // localStorage.removeItem('age');

  // const age = localStorage.getItem('age');
  // const user = localStorage.getItem('user');
  // console.log(age, user);

  // const user = {
  //   username: 'Raju karmakar',
  //   age:24,
  //   city:'Dhanbad'
  // }

  // console.log(user);

  // localStorage.setItem('user', JSON.stringify(user));

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);



  return (
    <div>App</div>
  )
}

export default App