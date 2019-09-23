import React, {useState} from 'react';
import Person from './Person/Person'
import './App.css';

const appHook = props => {

  const [personState, setPersonsState] = useState({
    persons : [
      {
        name : "Max",
        age : "28"
      },
      {
        name : "Lucy",
        age : "29"
      }
    ],
  });



  const [indexState, setIndexState] = useState({
    index : 0
  });

  const switchNameHandler = () => {
    console.log(indexState.index)
    setIndexState({
      index : (indexState.index + 1)%2
    });
  }


  return (
    <div className="App">
      <h1>bla bitch</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[indexState.index].name} age={personState.persons[indexState.index].age} > Something inside</Person>
      <Person name={personState.persons[indexState.index].name} age={personState.persons[indexState.index].age} > Something inside</Person>
    </div>
  );

}

export default appHook;





