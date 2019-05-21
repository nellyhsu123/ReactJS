import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  
  //useState returns two elements of an Array, first is the current state, second element is a function that updates the state
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  });

  // use multiple useState calls to maintain old states within new states in react hook
  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  // hook doesn't merge old state but instead replaces
  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // Don't do this: this.state.persons[0].name = "Maximilian";
    setPersonsState( {
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a react app</h1>
      <p>This is really working!</p>
      {/*don't add (), would execute immediately, only want to pass a reference*/}
      <button onClick={switchNameHandler}>Switch Name</button>
      {personsState.persons.map((el, i) => <Person name={el.name} age={el.age} key={i} />)}
   </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')); // creates an element and a child element with the second call
}

export default App;

  // "handler" naming convention

