import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {

    state = {
        showPersons: false,
        persons: [
            {
                id: 1,
                name: "Max",
                age: "28"
            },
            {
                id: 2,
                name: "Lucy",
                age: "29"
            }
        ],
    };

    switchNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => person.id === id);
        const person = {
            ...this.state.persons[personIndex]
        }
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    }

    switchNameWithParamHandler = (newName) => {
        this.setState({
            persons: [
                {
                    name: newName,
                    age: "30"
                },
                {
                    name: "another " + newName,
                    age: "41"
                }
            ]
        });
    }

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons: persons
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: event.target.value,
                    age: "30"
                },
                {
                    name: "another " + event.target.value,
                    age: "41"
                }
            ]
        });
    };

    // shouldComponentUpdate = (nextProps, nextState) => {
    //     return nextState.persons.length !== this.state.persons.length;
    // }

    render() {
        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (<div>

            <p className={classes.join(' ')}> some unknown paragraph</p>

            {this.state.persons.map((person, index) => {
                return (<Person name={person.name} age={person.age}
                    nameChangeHandler={(event) => this.switchNameHandler(event, person.id)}
                    click={this.deletePersonHandler.bind(this, index)}
                    key={person.id}>
                    Something inside
              </Person>)
            })}
        </div>);
    }
}

export default Persons;